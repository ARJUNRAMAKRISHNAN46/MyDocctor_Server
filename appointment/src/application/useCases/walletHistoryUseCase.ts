import { IDependencies } from "../interfaces/IDependencies";

export const walletHistoryUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { walletHistory },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      try {
        const wallet = await walletHistory(userId);

        return wallet;
      } catch (error: any) {
        return null;
      }
    },
  };
};
