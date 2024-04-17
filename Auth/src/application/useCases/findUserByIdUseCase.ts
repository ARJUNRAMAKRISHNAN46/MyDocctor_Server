import { IDependencies } from "../interfaces/IDependencies";

export const findUserByIdUseCase = (dependecies: IDependencies) => {
  const {
    repositories: { findUserById },
  } = dependecies;

  return {
    execute: async (id: string) => {
      try {
        return await findUserById(id);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
