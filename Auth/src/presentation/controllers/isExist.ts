import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const isExistController = (dependencies: IDependencies) => {
    const {useCases: { isExistUseCase }} = dependencies;

    return async (req: Request, res: Response, next: NextFunction)  => {
        try {
            console.log("🚀 ~ return ~ access_token:");
            console.log("🚀 ~ return ~ access_token:", req.cookies.access_token);

            const token: string = req.cookies.access_token;
            console.log('=====');
            
            const user: UserEntity | null = await isExistUseCase(dependencies).execute(token);
            console.log("🚀 ~ return ~ user:", user)
            
            if(!user) {
                throw new Error('User not found');
            } else {
                res.status(200).json({ success: true, data: user });
            }

        } catch (error: any) {
            next(error);
        }
    }
}