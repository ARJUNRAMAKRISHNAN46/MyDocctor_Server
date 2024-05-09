import { UserEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const userSignupUseCase = (dependencies: IDependencies) => {
    const {repositories: { userSignup }} = dependencies;

    return {
        execute: async (data: UserEntity) => {
            try {
                return await userSignup(data);
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}