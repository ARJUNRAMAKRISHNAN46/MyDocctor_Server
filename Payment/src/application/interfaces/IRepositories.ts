import { PaymentEntity } from "@/domain/entities";

export interface IRepositories {
    savePayment: (data: any) => Promise<PaymentEntity | null>;
}