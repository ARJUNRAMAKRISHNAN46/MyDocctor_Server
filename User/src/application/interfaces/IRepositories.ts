import {SpecialityEntity, UserEntity} from '../../domain/entities';

export interface IRepositories {
    verifyDoctor: (id: string) => Promise<UserEntity | null>
    addSpeciality: (data: SpecialityEntity) => Promise<SpecialityEntity | null>
}