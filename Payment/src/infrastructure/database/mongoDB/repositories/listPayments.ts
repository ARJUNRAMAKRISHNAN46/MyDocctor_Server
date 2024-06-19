import { PaymentEntity } from "@/domain/entities";
import { Payment } from "../models";

export const listPayments = async (
  doctorId: string
): Promise<PaymentEntity[] | null> => {
  try {
    const pay = await Payment.find({ doctor_id: doctorId });
    console.log("🚀 ~ pay:", pay)
    return await Payment.find({ doctor_id: doctorId });
  } catch (error: any) {
    return null;
  }
};
