import { IDependencies } from "../interfaces/IDependencies";

export const listAllAppointmentUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listAllAppointments },
  } = dependencies;

  return {
    execute: async () => {
      try {
        const listAppointments = await listAllAppointments();

        return listAppointments;
      } catch (error: any) {
        return null;
      }
    },
  };
};
