import { PaymentEntity } from "@/domain/entities";
import { Payment } from "../models";

export const savePayment = async(data: any): Promise<PaymentEntity | null> => {
    try {

        const filterData = {
            doctor_id: data?.doctor_id,
              user_id: data?.user_id,
              date: data?.date,
              slot: data?.slot,
              fees: data?.fees
            }
        
        const response = await Payment.create(filterData);

        return response as PaymentEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}