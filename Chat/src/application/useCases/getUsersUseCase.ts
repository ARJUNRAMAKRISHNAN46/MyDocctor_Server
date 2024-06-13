import { IDependencies } from "../interfaces/IDependencies";

export const getUsersUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getUsers },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      return await getUsers(userId);
    },
  };
};
