import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listUserController = (dependencies: IDependencies) => {
    const { useCases: { listUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userList = await listUserUseCase(dependencies).execute();
            console.log("🚀 ~ return ~ userList:", userList)
            
            if (!userList) {
                res.status(400).json({
                  success: false,
                  message: "user listing failed",
                  data: [],
                });
              }
        
              res.status(200).json({
                success: true,
                message: "user listed",
                data: userList,
              });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing user",
              });
        }
    }
}