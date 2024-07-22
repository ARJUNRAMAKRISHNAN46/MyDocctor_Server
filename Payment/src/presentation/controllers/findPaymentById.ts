import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findPaymentByIdController = (dependencies: IDependencies) => {
    const { useCases: { findPaymentByIdUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const payment = await findPaymentByIdUseCase(dependencies).execute(id);

            if(!payment) {
                res.status(400).json({
                    success: false,
                    message: "Payment find failed"
                })
                return;
            }

            res.status(200).json({
                success: true,
                message: "Payment find successfully",
                data: payment
            })
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }
}