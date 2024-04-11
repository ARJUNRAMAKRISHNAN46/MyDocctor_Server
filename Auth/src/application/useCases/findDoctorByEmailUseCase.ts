import { IDependencies } from "../interfaces/IDependencies";

export const findDoctorByEmailUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findDoctorByEmail },
  } = dependencies;

  return {
    execute: async (email: string) => {
      try {
        return await findDoctorByEmail(email);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
