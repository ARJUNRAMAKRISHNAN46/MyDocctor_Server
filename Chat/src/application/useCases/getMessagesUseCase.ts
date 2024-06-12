import { IDependencies } from "../interfaces/IDependencies";

export const getMessageUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getMessage },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await getMessage(id);
    },
  };
};
