import { walletEntity } from "@/domain/entities/wallet";
import { Wallet } from "../models/wallet";

export const refundToWallet = async (
  data: walletEntity
): Promise<walletEntity | null> => {
  console.log("🚀 ~ data:", data)
  try {
    const refundWallet = await Wallet.create(data);

    return refundWallet;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
