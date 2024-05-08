import { Request, Response, NextFunction } from 'express';
import { IDependencies } from '@/application/interfaces/IDependencies';

export const addSpecialityController = (dependencies: IDependencies) => {
    const {} = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const credentials = req.body;
            console.log("🚀 ~ return ~ credentials:", credentials);
            const filter = credentials?.specialtyName;
            const existSpeciality = await Speciality.findOneAndUpdate(filter,credentials);
            if(existSpeciality) {
                res.status(400).json({
                    success: false,
                    message: "speciality already exists",
                });
            }
            
        } catch (error: any) {
            console.log(error?.message);
            console.log("error while adding speciality");
        }
    }
}