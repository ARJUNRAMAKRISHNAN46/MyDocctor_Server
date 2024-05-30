import { IDependencies } from "../interfaces/IDependencies";

export const listServiceUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { serviceLists },
  } = dependencies;

  return {
    execute: async () => {
      try {
        const serviceList = await serviceLists();

        return serviceList;
      } catch (error: any) {
        return null;
      }
    },
  };
};
