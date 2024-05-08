import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupValidation } from "../../utils/validations/signupValidation";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/producers";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

export const signupWithGoogle = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase, userSignupUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credential = req.body;
      console.log("🚀 ~ return ~ google signup ~ credential:", credential);
      const existUser = await findUserByEmailUseCase(dependencies).execute(
        req.body.email
      );

      if (existUser) {
        return res.status(409).send({ error: "Email already registered" });
      }

      const { value, error } = signupValidation.validate(req.body);

      if (error) {
        res.status(401).json({
          success: false,
          message: error?.message,
        });
      }

      value.password = await hashPassword(value.password);

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
        });
        console.log("🚀 ~ return ~ result:", result);

        res.status(200).json({
          success: true,
          user: result,
          message: "User Created!",
        });
        const userAdded = {
          _id: result._id as ObjectId,
          name: result.name,
          mobileNumber: result.mobileNumber,
          email: result.email,
          password: result.password,
          role: result.role,
        };

        userCreatedProducer(userAdded);
      }
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
