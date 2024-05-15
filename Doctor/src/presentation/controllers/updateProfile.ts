import { IDependencies } from "@/application/interfaces/IDependencies";
import { userUpdateProducer } from "../../infrastructure/kafka/producers/userUpdateProducer";
import { Request, Response, NextFunction } from "express";

export const updateProfileController = (dependencies: IDependencies) => {
    const {useCases: { updateProfileUseCase }} = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            console.log("🚀 ~ return ~ data:", data);

            const updatedData = await updateProfileUseCase(dependencies).execute(data);
            console.log("🚀 ~ return ~ updatedData:", updatedData);

            if(!updatedData) {
                res.status(400).json({
                    success: false,
                    message: "doctor profile updation failed"
                });
            }

            userUpdateProducer(updatedData)

            res.status(200).json({
                success: true,
                message: "doctor profile updation successfull"
            })
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while doctor profile updation",
            })
        }
    }
}