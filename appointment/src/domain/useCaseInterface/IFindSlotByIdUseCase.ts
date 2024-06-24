import { AppointmentEntity } from "../entities";

export interface IFindSlotByIdUseCase {
  execute(slotId: string): Promise<AppointmentEntity | null>;
}
