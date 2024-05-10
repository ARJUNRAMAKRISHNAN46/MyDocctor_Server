import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { loginValidation } from "../../utils/validations/loginValidation";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";

export const loginWithGoogle = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = await loginValidation.validate(req.body);
      console.log("🚀 ~ return ~ value:", value)

      if (error) {
        return res.status(401).json({
          success: false,
          message: error?.message,
        });
      }

      const result = await findUserByEmailUseCase(dependencies).execute(value.email);
      console.log("🚀 ~ return ~ result:", result);
      if (result) {

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

        return res.status(200).json({
          success: true,
          data: result,
          message: "Patient Logged",
        });
      } else {
        return res.status(401).json({
          success: false,
          data: null,
          message: "No user found",
        });
      }
    } catch (error: any) {
      return res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
