import { IDependencies } from "../interfaces/IDependencies";
import { PatientEntity } from "../../domain/entities";

export const createPatientUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createPatient },
  } = dependencies;

  return {
    execute: async (data: PatientEntity) => {
      try {
        return await createPatient(data);
      } catch (error: any) {
        throw new Error(error?.message || "Patient created failed");
      }
    },
  };
};
