import { IDependencies } from "../interfaces/IDependencies";

export const verifyDoctor = (dependencies: IDependencies) => {
  const {
    repositories: { verifyDoctor },
  } = dependencies;

  return {
    execute: async (id: string) => {
      try {
        return await verifyDoctor(id);
      } catch (error: any) {
        console.log(error?.message);
        console.log('Doctor creation failed!!!');
      }
    },
  };
};
