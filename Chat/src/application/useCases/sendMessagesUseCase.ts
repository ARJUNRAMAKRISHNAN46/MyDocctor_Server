import { IDependencies } from "../interfaces/IDependencies";

export const sendMessageUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { sendMessage },
  } = dependencies;

  return {
    execute: async (obj: any) => {
      return await sendMessage(obj);
    },
  };
};
