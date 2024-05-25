import { IDependencies } from "../interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";

export const updateProfileUseCase = (dependencies: IDependencies) => {
    const { repositories: { updateUser } } = dependencies;

    return {
        execute: async(data: UserEntity) => {
            try {
                return await updateUser(data);
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}