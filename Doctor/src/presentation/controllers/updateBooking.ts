import { IDependencies } from "../../application/interfaces/IDependencies";
import { updateBookingProducer } from "../../infrastructure/kafka/producers/updateBookingProducer";
import { Request, Response, NextFunction } from "express";

export const updateBookingController = (dependencies: IDependencies) => {
    const { useCases: { updateBookingUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            console.log("🚀 ~ return ~ data:", data)
            const id = req.params.id;
            console.log("🚀 ~ return ~ id:", id)
            
            const updatedData = await updateBookingUseCase(dependencies).execute(data, id);
            console.log("🚀 ~ return ~ updatedData:", updatedData);

            if(!updatedData) {
                res.status(400).json({
                    success: false,
                    message: "error while doctor slot updation",
                });
            };

            updateBookingProducer(updatedData);

            res.status(200).json({
                success: true,
                message: "doctor slot updation successfull"
            })
            
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while doctor slot updation",
            })
        }
    }
}