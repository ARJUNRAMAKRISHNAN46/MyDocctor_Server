import { IDependencies } from "../interfaces/IDependencies";

export const listUsersForSideBarUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listUsersForSideBar },
  } = dependencies;

  return {
    execute: async (doctorId: string) => {
      try {
        const userList = await listUsersForSideBar(doctorId);

        return userList;
      } catch (error: any) {
        return null;
      }
    },
  };
};
