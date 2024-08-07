import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { signupValidation } from "../../utils/validations/signupValidation";
import { generateOTP } from "../../utils/otp/generateOTP";
import { sendOTP } from "../../utils/otp/sendOTP";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import { Otp } from "../../infrastructure/database/mongoDB/models/otp";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducer";
import { generatePassword } from "../../utils/password/generatePassword";
import jwt from "jsonwebtoken";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase, verifyOtpUseCase, userSignupUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = req.body;

      const existUser = await findUserByEmailUseCase(dependencies).execute(
        req.body.email
      );

      if (existUser) {
        return res
          .status(400)
          .json({ success: false, message: "Email already registered" });
      }

      if (!credentials.otp && credentials.password) {
        const otp = await generateOTP();
        console.log("🚀 ~ return ~ otp:", otp);

        let emailExist = await Otp.findOne({ email: credentials.email });
        let dbOtp;

        if (emailExist) {
          dbOtp = await Otp.findOneAndUpdate(
            { email: credentials.email },
            { $set: { otp, createdAt: new Date() } }
          );
        } else {
          dbOtp = await Otp.create({ email: credentials.email, otp });
        }

        if (dbOtp) {
          sendOTP(credentials.email, otp).then((response) => {
            return res
              .status(200)
              .send({ message: `An OTP has been send to your email` });
          });
        }
      } else {
        try {
          let otpVerified = false;

          if (credentials.otp) {
            const otp = credentials?.otp;
            otpVerified = await verifyOtpUseCase(dependencies).execute(
              credentials.email,
              otp
            );
          }

          if (!credentials.password) {
            credentials.password = await generatePassword();
          }

          if (!otpVerified && credentials.otp) {
            // throw new Error("OTP is not verified");
            res.status(406).json({
              success: false,
              message: "Please enter a valid otp",
            });
          } else {
            delete credentials?.otp;
            const { value, error } = signupValidation.validate(req.body);
            console.log("🚀 ~ return ~ value:", value);
            if (error) {
              res.status(401).json({
                success: false,
                message: error?.message,
              });
            }

            value.password = await hashPassword( value?.password);

            const result = await userSignupUseCase(dependencies).execute(value);

            if (!result) {
              res.status(401).json({
                success: false,
                message: "error occured on signup",
              });
            } else {
              let payload = {
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!,
              };

              const AccessToken = jwt.sign(
                payload,
                String(process.env.ACCESS_TOKEN_SECRET),
                { expiresIn: "1h" }
              );

              res.cookie("access_token", AccessToken, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
              });
              console.log("🚀 ~ return ~ result:", result);

              res.status(200).json({
                success: true,
                user: result,
                message: "User Created!",
              });

              
              userCreatedProducer(result);
            }
          }
        } catch (error: any) {
          res.status(401).json({
            success: false,
            message: error?.message,
          });
        }
      }
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
