import { UserEntity} from '../../domain/entities';

export interface IRepositories {
    verifyDoctor: (id: string) => Promise<UserEntity | null>
}