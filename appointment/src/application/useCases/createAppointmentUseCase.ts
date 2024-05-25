import { IDependencies } from "../interfaces/IDependencies";
import { AppointmentEntity } from "@/domain/entities";

export const createAppointmentUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createAppointment },
  } = dependencies;

  return {
    execute: async (data: AppointmentEntity) => {
      try {
        return await createAppointment(data);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
