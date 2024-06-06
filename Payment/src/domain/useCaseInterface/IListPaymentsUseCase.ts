import { PaymentEntity } from "../entities";

export interface IListPaymentsUseCase {
  execute(doctorId: string): Promise<PaymentEntity[] | null>;
}
