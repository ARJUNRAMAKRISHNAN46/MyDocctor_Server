import { AppointmentEntity } from "../entities";

export interface IRemoveUserIdFromSlotUseCase {
  execute(slotId: string): Promise<AppointmentEntity | null>;
}
