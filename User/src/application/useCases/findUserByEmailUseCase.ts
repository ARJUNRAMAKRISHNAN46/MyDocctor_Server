import { IDependencies } from "../interfaces/IDependencies";

export const findUserByEmailUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findUserByEmail },
  } = dependencies;

  return {
    execute: async (email: string) => {
      try {
        return await findUserByEmail(email);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
