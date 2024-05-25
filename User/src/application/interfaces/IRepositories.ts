import { SpecialityEntity, UserEntity } from "../../domain/entities";

export interface IRepositories {
    findUserByEmail: (email: string) => Promise<UserEntity | null>;
    findUserById: (id: string) => Promise<UserEntity | null>;
    verifyUser: (email: string) => Promise<UserEntity | null>;
    listUser: () => Promise<UserEntity[] | null>;
    addSpeciality: (data: SpecialityEntity) => Promise<SpecialityEntity | null>;
    listSpeciality: () => Promise<SpecialityEntity[] | null>;
    updateUser: (data: UserEntity) => Promise<UserEntity | null>;
}