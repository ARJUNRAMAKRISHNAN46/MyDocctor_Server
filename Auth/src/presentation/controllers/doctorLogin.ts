import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { loginValidation } from "../../utils/validations/loginValidation";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";

export const doctorLoginController = (dependencies: IDependencies) => {
  const {
    useCases: { loginDoctorUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = await loginValidation.validate(req.body);

      if (error) {
        throw new Error(error?.message);
      }

      const result = await loginDoctorUseCase(dependencies).execute(
        value.email,
        value.password
      );

      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
      });

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
      });

      res.cookie("access_token", accessToken, { httpOnly: true });
      res.cookie("refresh_token", refreshToken, { httpOnly: true });

      res.status(200).json({
        success: true,
        data: result,
        message: 'Doctor logged-in'
      })
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
};
