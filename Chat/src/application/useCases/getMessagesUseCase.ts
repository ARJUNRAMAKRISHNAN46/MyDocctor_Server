import { getMessageInputs } from "@/infrastructure/database/mongoDB/repositories";

export const getMessageUseCase = (dependencies: any) => {
  const {
    repositories: { getMessage },
  } = dependencies;

  return {
    execute: async (data: getMessageInputs) => {
      return await getMessage(data);
    },
  };
};
