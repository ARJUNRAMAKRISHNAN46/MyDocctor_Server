import { IDependencies } from "../interfaces/IDependencies";

export const listDoctorSlotsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listDoctorSlots },
  } = dependencies;

  return {
    execute: async (doctor_id: string, selectedDate: string) => {
      try {
        const doctorSlots = await listDoctorSlots(doctor_id, selectedDate);

        return doctorSlots;
      } catch (error: any) {
        console.log("🚀 ~ execute:async ~ error:", error);
        return null;
      }
    },
  };
};
