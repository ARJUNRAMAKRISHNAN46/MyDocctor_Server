import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utils/bcrypt/hashPassword";

export const updatePassword = (dependencies: IDependencies) => {
  const {
    useCases: { updateUserPasswordUseCase, findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required fields",
        });
      }

      const existUser = await findUserByEmailUseCase(dependencies).execute(
        email
      );

      if (!existUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      password = await hashPassword(password);
      const updateSuccess = await updateUserPasswordUseCase(
        dependencies
      ).execute({ email, password });

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
