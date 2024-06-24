export const deleteMessageUseCase = (dependencies: any) => {
  const {
    repositories: { deleteMessage },
  } = dependencies;

  return {
    execute: async (msgId: string) => {
      console.log("🚀 ~ execute: ~ msgId:", msgId)
      const ssss =  await deleteMessage(msgId);
      console.log("🚀 ~ execute: ~ ssss:", ssss)
      return ssss;
    },
  };
};
