import { PaymentEntity } from "../entities";

export interface IListAllPaymentsUseCase {
  execute(): Promise<PaymentEntity[] | null>;
}
