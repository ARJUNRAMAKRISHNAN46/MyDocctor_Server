import { PaymentEntity } from "@/domain/entities";

export interface IRepositories {
  savePayment: (data: any) => Promise<PaymentEntity | null>;
  listPayments: (doctorId: any) => Promise<PaymentEntity[] | null>;
  listAllPayments: () => Promise<PaymentEntity[] | null>;
}
