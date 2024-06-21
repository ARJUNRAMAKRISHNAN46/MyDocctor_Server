import { AdminAppointmentSlot } from "@/infrastructure/database/mongoDB/repositories";

export interface IListAllAppointmentUseCase {
  execute(): Promise<AdminAppointmentSlot[] | null>;
}
