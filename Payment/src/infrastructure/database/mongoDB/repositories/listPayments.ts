import { PaymentEntity } from "@/domain/entities";
import { Payment } from "../models";

export const listPayments = async (
  doctorId: string
): Promise<PaymentEntity[] | null> => {
  try {
    return await Payment.find({ doctor_id: doctorId });

    // return payments;
  } catch (error: any) {
    return null;
  }
};
