import { IDependencies } from "../interfaces/IDependencies";

export const verifyPatientUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findPatientByEmail, verifyPatient },
  } = dependencies;

  return {
    execute: async (data: { email: string; otp: string }) => {
      try {
        const Patient = await findPatientByEmail(data.email);

        if (!Patient) {
          throw new Error("Patient not exist");
        }

        if (!data.otp) {
          throw new Error("OTP not exist");
        }

        if (data.otp !== Patient.otp) {
          throw new Error("OTP is incorrect, Try again");
        }

        const update = await verifyPatient(data.email);

        return update;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};