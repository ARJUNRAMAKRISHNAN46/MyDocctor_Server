import { IDependencies } from "../interfaces/IDependencies";

export const doctorListAppointmentsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { doctorListAppointments },
  } = dependencies;

  return {
    execute: async (doctorId: string) => {
      try {
        const appList = await doctorListAppointments(doctorId);

        return appList;
      } catch (error: any) {
        return null;
      }
    },
  };
};
