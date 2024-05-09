import { IDependencies } from "../interfaces/IDependencies";

export const verifyDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { verifyDoctor },
  } = dependencies;

  return {
    execute: async (id: string) => {
      try {
        const doctor = await verifyDoctor(id);
        return doctor;
      } catch (error: any) {
        console.log(error?.message);
        console.log("Doctor creation failed!!!");
      }
      return null;
    },
  };
};
