import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import Jwt from "jsonwebtoken";
import { sendOTP } from "../../utils/otp/sendOTP";

export const forgotPassword = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      console.log("🚀 ~ return ~ email: ", req.body);
      if (!email) {
        res.status(401).json({
          success: false,
          message: "no email found",
        });
      }

      const existUser = await findUserByEmailUseCase(dependencies).execute(
        req.body.email
      );

      if (!existUser) {
        res.status(401).json({
          success: true,
          message: "No user found",
        });
      }
      console.log("email ~ forgotPassword", email);

      const encrypt = Jwt.sign(email, String(process.env.ACCESS_TOKEN_SECRET));
      console.log("🚀 ~ return ~ encrypt:", encrypt);

      sendOTP(
        email,
        `http://mydocctor.online/forgotPassword-post?email=${encrypt}`
      )
        .then((res) => {
          console.log("🚀 ~ sendOTP ~ res:", res);
        })
        .catch((err) => {
          console.log("🚀 ~ sendOTP ~ err:", err);
        });

      res.status(200).json({
        success: true,
        data: encrypt,
        message: "email encrypted",
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: "forgot password failed",
      });
    }
  };
};
