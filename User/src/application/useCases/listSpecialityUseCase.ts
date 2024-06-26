import { IDependencies } from "../interfaces/IDependencies";

export const listSpecialityUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listSpeciality },
  } = dependencies;

  return {
    execute: async () => {
      try {
        const specialityList = await listSpeciality();

        return specialityList;
      } catch (error: any) {
        return null;
      }
    },
  };
};
