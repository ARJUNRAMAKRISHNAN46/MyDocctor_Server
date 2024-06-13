import { IDependencies } from "../interfaces/IDependencies";

export const getDoctorsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getDoctors },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      return await getDoctors(userId);
    },
  };
};
