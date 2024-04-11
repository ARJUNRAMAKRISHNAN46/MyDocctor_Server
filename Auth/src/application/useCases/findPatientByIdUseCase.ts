import { IDependencies } from "../interfaces/IDependencies";

export const findPatientByIdUseCase = (dependecies: IDependencies) => {
  const {
    repositories: { findPatientById },
  } = dependecies;

  return {
    execute: async (id: string) => {
      try {
        return await findPatientById(id);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
