import { AppointmentEntity } from "../entities";

export interface ISlotListingUseCase {
  execute(doctor_id: string): Promise<AppointmentEntity[] | null>;
}
