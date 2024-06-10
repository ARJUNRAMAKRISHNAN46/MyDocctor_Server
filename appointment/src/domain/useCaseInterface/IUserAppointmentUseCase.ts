import { UserAppointmentSlot } from "@/infrastructure/database/mongoDB/repositories";
// import { AppointmentEntity } from "../entities";

export interface IUserAppointmentUseCase {
  execute(userId: string): Promise<UserAppointmentSlot[] | null>;
}
