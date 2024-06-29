import { Wallet } from "../models/wallet";
import { walletEntity } from "@/domain/entities/wallet";

export const walletHistory = async (
  userId: string
): Promise<walletEntity[] | null> => {
  try {
    const walletHistory = await Wallet.find({ userId: userId });

    return walletHistory;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
