import { SpecialityEntity, UserEntity } from "../../domain/entities";

export interface IRepositories {
    createUser: (data: UserEntity) => Promise<UserEntity | null>;
    findUserByEmail: (email: string) => Promise<UserEntity | null>;
    findUserById: (id: string) => Promise<UserEntity | null>;
    updateUserPassword: (data: {email: string, password: string}) => Promise<UserEntity | null>;
    verifyUser: (email: string) => Promise<UserEntity | null>;
    verifyOtp: (email: string, otp: string) => Promise<boolean>;
    userSignup: (data: UserEntity) => Promise<UserEntity | null>;
    isExist: (token: string) => Promise<UserEntity | null>;
    listUser: () => Promise<UserEntity[] | null>;
    addSpeciality: (data: SpecialityEntity) => Promise<SpecialityEntity | null>;
    listSpeciality: () => Promise<SpecialityEntity[] | null>;
}