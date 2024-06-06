import { IDependencies } from "../interfaces/IDependencies";

export const listDoctorsForSideBarUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listDoctorsForSideBar },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      try {
        const doctorList = await listDoctorsForSideBar(userId);

        return doctorList;
      } catch (error: any) {
        return null;
      }
    },
  };
};
