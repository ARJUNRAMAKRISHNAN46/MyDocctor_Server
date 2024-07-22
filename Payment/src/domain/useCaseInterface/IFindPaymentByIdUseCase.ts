import { PaymentEntity } from "../entities";

export interface IFindPaymentByIdUseCase {
  execute(id: string): Promise<PaymentEntity | null>;
}
