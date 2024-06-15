import { sendMessageInputs } from "@/infrastructure/database/mongoDB/repositories";

export const sendMessageUseCase = (dependencies: any) => {
  const {
    repositories: { sendMessage },
  } = dependencies;

  return {
    execute: async (data: sendMessageInputs) => {
      // console.log("🚀 ~ execute: ~ data:", data)
      return await sendMessage(data);
    },
  };
};
