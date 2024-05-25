import { IDependencies } from "../interfaces/IDependencies";

export const listDoctorSlotsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listDoctorSlots },
  } = dependencies;

  return {
    execute: async (doctor_id: string) => {
      try {
        const doctorSlots = await listDoctorSlots(doctor_id);
        console.log("🚀 ~ execute:async ~ doctorSlots:", doctorSlots);

        return doctorSlots;
      } catch (error: any) {
        console.log("🚀 ~ execute:async ~ error:", error);
        return null;
      }
    },
  };
};
