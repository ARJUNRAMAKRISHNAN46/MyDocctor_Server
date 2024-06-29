import { walletEntity } from "@/domain/entities/wallet";
import mongoose, { model } from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  amount: {
    type: String,
  },
  reason: {
    type: String,
  },
  date: {
    type: String,
  },
});

export const Wallet = model<walletEntity>("wallets", walletSchema);
