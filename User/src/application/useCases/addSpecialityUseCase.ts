import { IDependencies } from "../interfaces/IDependencies";
import { SpecialityEntity } from "@/domain/entities";

export const addSpecialityUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { addSpeciality },
  } = dependencies;

  return {
    execute: async (data: SpecialityEntity) => {
      try {
        return await addSpeciality(data);
      } catch (error: any) {
        console.log(error?.message);
        console.log("add speciality failed");
        return null;
      }
    },
  };
};
