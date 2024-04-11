import { IDependencies } from "../interfaces/IDependencies";

export const findPatientByEmailUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findPatientByEmail },
  } = dependencies;

  return {
    execute: async (email: string) => {
      try {
        return await findPatientByEmail(email);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
