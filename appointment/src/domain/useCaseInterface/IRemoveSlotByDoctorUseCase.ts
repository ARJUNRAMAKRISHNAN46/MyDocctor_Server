import { AppointmentEntity } from "../entities";

export interface IRemoveSlotByDoctorUseCase {
  execute(slotId: string): Promise<AppointmentEntity | null>;
}
