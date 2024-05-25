import { IDependencies } from "@/application/interfaces/IDependencies";
import { updateUserProducer } from "../../infrastructure/kafka/producers/updateUserProfileProducer";
import { Request, Response, NextFunction } from "express";

export const updateProfileController = (dependencies: IDependencies) => {
    const { useCases: { updateProfileUseCase } } = dependencies;

    return async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            console.log("🚀 ~ returnasync ~ data:", data)
            const updateProfile = await updateProfileUseCase(dependencies).execute(data);
            console.log("🚀 ~ returnasync ~ updateProfile:", updateProfile);

            if (!updateProfile) {
                res.status(400).json({
                  success: false,
                  message: "user profile updation failed",
                });
              }

              
              res.status(200).json({
                succuss: true,
                message: "user profile updated successfully",
              });
              updateUserProducer(updateProfile);
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while updating user profile",
              });
        }
    }
}