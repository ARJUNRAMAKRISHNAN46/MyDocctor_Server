import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import { verifyToken } from "../../utils/jwt";

export const updatePassword = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase, updateUserPasswordUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("🚀 ~ return ~ body:", req.body);

      const email = await String(verifyToken(req.body.email));
      console.log("🚀 ~ return ~ data:", email);

      if (!req.body.email || !req.body.password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required fields",
        });
      }

      const existUser = await findUserByEmailUseCase(dependencies).execute(
        email
      );
      console.log("🚀 ~ return ~ existUser:", existUser);

      if (!existUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      let password = await hashPassword(req.body.password);
      password = String(password);
      console.log("🚀 ~ return ~ password:", password);

      const updateSuccess = await updateUserPasswordUseCase(
        dependencies
      ).execute({ email, password });
      console.log("🚀 ~ return ~ updateSuccess:", updateSuccess);

      if (updateSuccess) {
        return res.status(200).json({
          success: true,
          data: existUser,
          message: "Password updated successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Failed to update password",
        });
      }
    } catch (error) {
      console.error("Error updating password:", error);
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred",
      });
    }
  };
};
