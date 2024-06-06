import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const logoutController = (dependencies: IDependencies) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie('access_token');
            res.clearCookie('refresh_token');
            console.log('cookie cleared');
            
            res.status(200).json({message: 'Logged out'})
        } catch (error: any) {
            throw new Error(error?.message);
        }
    }
}