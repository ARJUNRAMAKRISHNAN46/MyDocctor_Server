import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { signupValidation } from "../../utils/validations/signupValidation";
import { generateOTP } from "../../utils/otp/generateOTP";
import { sendOTP } from "../../utils/otp/sendOTP";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import jwt from "jsonwebtoken";
import { Otp } from "../../infrastructure/database/mongoDB/models/otp";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducer";
import { generatePassword } from "../../utils/password/generatePassword";
import { ObjectId } from "mongoose";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase, verifyOtpUseCase, userSignupUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = req.body;
      console.log("🚀 ~ return ~ credentials:", credentials);

      const existUser = await findUserByEmailUseCase(dependencies).execute(
        req.body.email
      );

      if (existUser) {
        return res.status(409).send({ error: "Email already registered" });
      }

      if (!credentials.otp && credentials.password) {
        const otp = await generateOTP();
        console.log("🚀 ~ return ~ otp:", otp);

        let emailExist = await Otp.findOne({ email: credentials.email });
        console.log("🚀 ~ return ~ emailExist:", emailExist);
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
            console.log("🚀 ~ sendOTP ~ response:", response);
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
              message: 'Please enter a valid otp'
            });
          } else {
            delete credentials?.otp;
            const { value, error } = signupValidation.validate(req.body);
            if (error) {
              throw new Error(error?.message);
            }

            value.password = await hashPassword(value.password);

            const result = await userSignupUseCase(dependencies).execute(value);

            if (!result) {
              throw new Error("Failed to create user");
            } else {
              let payload = {
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!,
              };
              console.log('----------------verithe');

              const AccessToken = jwt.sign(
                payload,
                String(process.env.ACCESS_TOKEN_SECRET),
                { expiresIn: "1h" }
              );

              console.log(AccessToken,'----------------accessToken');
              
              res.cookie("access_token", AccessToken, {
                httpOnly: true,
              });
              console.log("🚀 ~ return ~ result:", result);

              res.status(200).json({
                success: true,
                user: result,
                message: "User Created!",
              });

              console.log(
                "somfosdhigahisdahgesigsidvisdhifeyigsuihyusdivhsdsidhiusdhisdfusdisdf"
              );
              const userAdded = {
                _id: result._id as ObjectId,
                name: result.name,
                email: result.email,
                password: result.password,
                role: result.role,
              };

              userCreatedProducer(userAdded);
            }
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
};
