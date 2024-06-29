import { Document } from "mongodb";

export interface walletEntity extends Document {
  userId: string;
  amount: string;
  reason: string;
  date: string;
}
