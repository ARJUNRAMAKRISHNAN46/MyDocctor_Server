import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Speciality } from "../../infrastructure/database/mongoDB/models";
import { specialityCreatedProducer } from "../../infrastructure/kafka/producers/specialityProducer";
import { SpecialityEntity } from "../../domain/entities";

export const addSpecialityController = (dependencies: IDependencies) => {
  const {
    repositories: { addSpeciality },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = req.body;
      console.log("🚀 ~ return ~ credentials:", credentials);

      const existSpeciality = await Speciality.findOne(
        {specialtyName: credentials?.specialtyName}
      );

      if (existSpeciality) {
        res.status(400).json({
          success: false,
          message: "speciality already exists",
        });
      }
      const result = await addSpeciality(credentials);
      console.log("🚀 ~ return ~ existSpeciality:", result);

      res.status(200).json({
        success: true,
        message: "Speciality added successfully",
      });

      specialityCreatedProducer(result as SpecialityEntity);
    } catch (error: any) {
      console.log(error?.message);
      console.log("error while adding speciality");
    }
  };
};
