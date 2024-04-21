import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";
import { loginValidation } from "../../utils/validations/loginValidation";

export const loginController = (dependencies: IDependencies) => {
  const {
    useCases: { loginUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = await loginValidation.validate(req.body);

      if (error) {
        res.status(401).json({
          success: false,
          message: error?.message,
        });
      }

      const result = await loginUserUseCase(dependencies).execute(
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
        message: "Patient Logged",
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
