import { PaymentEntity } from "@/domain/entities";
import { Payment } from "../models";

export const listAllPayments = async (): Promise<PaymentEntity[] | null> => {
  try {
    const paymentList = await Payment.find();

    if (!paymentList || paymentList.length === 0) {
      return null;
    }

    const mappedPayments: PaymentEntity[] = paymentList.map(payment => ({
      doctor_id: payment.doctor_id || "",
      date: payment.date || "",
      user_id: payment.user_id || "",
      slot: payment.slot || "",
      fees: payment.fees || 0,
    }));

    return mappedPayments;
  } catch (error: any) {
    return null;
  }
};
