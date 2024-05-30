import { PaymentEntity } from "../entities";

export interface ISavePaymentUseCase {
  execute(data: any): Promise<PaymentEntity | null>;
}
