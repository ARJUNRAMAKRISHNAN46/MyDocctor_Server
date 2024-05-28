import { FilterParams } from "@/domain/entities/filterParams";
import { UserEntity, bookingEntity } from "../../domain/entities";

export interface IRepositories {
    createUser: (data: UserEntity) => Promise<UserEntity | null>;
    findUserByEmail: (email: string) => Promise<UserEntity | null>;
    findUserById: (id: string) => Promise<UserEntity | null>; 
    verifyUser: (email: string) => Promise<UserEntity | null>;
    updateProfile: (data: UserEntity) => Promise<UserEntity | null>;
    listDoctor: () => Promise<UserEntity[] | null>;
    blockUser: (id: string) => Promise<UserEntity | null>;
    updateBooking: (data: bookingEntity, id: string) => Promise<UserEntity | null>;
    findDoctorBySpeciality: (speciality: string) => Promise<UserEntity[] | null>;
    addAppointmentLink: (id: string, link: string) => Promise<UserEntity | null>;
    filterDoctor: (params: FilterParams) => Promise<UserEntity[] | null>;
}