import { IDependencies } from "../../application/interfaces/IDependencies";
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
        return res.status(401).json({
          success: false,
          message: error?.message,
        });
      }

      const result = await loginUserUseCase(dependencies).execute(
        value.email,
        value.password
      );
      if (result?.isActive === false) {
        res.status(400).json({
          success: false,
          message: "You are blocked by admin!!!",
        });
        return;
      }

      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
      });

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
      });

      res.cookie("access_token", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      return res.status(200).json({
        success: true,
        data: result,
        message: "User Logged",
      });
    } catch (error: any) {
      return res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
