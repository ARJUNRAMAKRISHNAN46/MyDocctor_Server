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
          email: result.email,
          password: result.password,
          mobileNumber: result.mobileNumber,
          role: result.role,
          isBlocked: result.isBlocked,
          otp: result.otp,
          dob: result.dob,
          favouriteDoctor: result.favouriteDoctor,
          address: result.address,
          appointments: result.appointments,
          expertise: result.expertise,
          education: result.education,
          dateOfBirth: result.dateOfBirth,
          languagesKnown: result.languagesKnown,
          currentWorkingHospital: result.currentWorkingHospital,
          gender: result.gender,
          yearsOfExperience: result.yearsOfExperience,
          workingDays: result.workingDays,
          medicalLisenceNumber: result.medicalLisenceNumber,
          avatar: result.avatar,
          isVerified: result.isVerified,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          isActive: result.isActive,
          isProfile: result.isProfile,
          availableShifts: result.availableShifts,
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
