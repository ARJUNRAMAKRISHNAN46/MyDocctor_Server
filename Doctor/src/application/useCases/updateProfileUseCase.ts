import { UserEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const updateProfileUseCase = (dependencies: IDependencies) => {
    const { repositories: { updateProfile } } = dependencies;

    return {
        execute: async (data: UserEntity) => {
            try {
                console.log("🚀 ~ execute: ~ data:", data)
                const updatedData = await updateProfile(data);
                console.log("🚀 ~ execute: ~ updatedData:", updatedData);
                return updatedData;
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}