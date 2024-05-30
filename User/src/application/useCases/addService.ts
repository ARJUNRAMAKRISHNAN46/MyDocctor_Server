import { IDependencies } from "../interfaces/IDependencies";
import { ServiceEntity } from "@/domain/entities/service";

export const addServiceUseCase = (dependencies: IDependencies) => {
    const { repositories: { addService } } = dependencies;

    return {
        execute: async(data: ServiceEntity) => {
            try {
                return await addService(data);
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}