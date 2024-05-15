import { UserEntity, bookingEntity } from "../entities";

export interface IUpdateBookingUseCase {
  execute(data: bookingEntity, id: string): Promise<UserEntity | null>;
}
