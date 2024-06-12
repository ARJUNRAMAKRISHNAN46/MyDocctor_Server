import { IDependencies } from "../interfaces/IDependencies";

export const getChatUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getChat },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await getChat(id);
    },
  };
};
