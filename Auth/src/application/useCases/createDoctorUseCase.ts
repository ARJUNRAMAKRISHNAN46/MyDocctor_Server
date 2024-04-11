import { DoctorEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createDoctor },
  } = dependencies;

  return {
    execute: async (data: DoctorEntity) => {
      try {
        return await createDoctor(data);
      } catch (error: any) {
        throw new Error(error?.message || "Doctor create failed");
      }
    },
  };
};
