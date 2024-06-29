import { walletEntity } from "@/domain/entities/wallet";
import { IDependencies } from "../interfaces/IDependencies";

export const refundToWalletUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { refundToWallet },
  } = dependencies;

  return {
    execute: async (data: walletEntity) => {
      try {
        const wallet = await refundToWallet(data);

        return wallet;
      } catch (error: any) {
        return null;
      }
    },
  };
};
