import { Payment } from "../models";
import { PaymentEntity } from "../../../../domain/entities";

export const findPaymentById = async(id: string): Promise<PaymentEntity | null> => {
    try {
        const payment = await Payment.findOne({_id: id});

        return payment as PaymentEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}