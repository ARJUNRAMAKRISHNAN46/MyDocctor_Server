import { IDependencies } from "../interfaces/IDependencies";

export const findDoctorByIdUseCase = (dependecies: IDependencies) => {
  const {
    repositories: { findDoctorById },
  } = dependecies;

  return {
    execute: async (id: string) => {
      try {
        return await findDoctorById(id);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
