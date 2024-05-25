import { UserEntity } from "../entities";

export interface IAddAppointmentLinkUseCase {
    execute(id: string, link: string): Promise<UserEntity | null>;
}