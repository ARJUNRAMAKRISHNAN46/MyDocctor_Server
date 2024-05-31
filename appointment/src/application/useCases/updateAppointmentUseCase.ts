import { IDependencies } from "../interfaces/IDependencies";
import { AppointmentEntity } from "@/domain/entities";

export const updateAppointmentUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updateAppoinment },
  } = dependencies;

  return {
    execute: async (data: AppointmentEntity) => {
      try {
        return await updateAppoinment(data);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
