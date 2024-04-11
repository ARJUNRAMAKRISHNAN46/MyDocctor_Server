import { IDependencies } from "../interfaces/IDependencies";

export const verifyDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findDoctorByEmail, verifyDoctor },
  } = dependencies;

  return {
    execute: async (data: { email: string; otp: string }) => {
      try {
        const Doctor = await findDoctorByEmail(data.email);

        if (!Doctor) {
          throw new Error("User not found");
        }

        if (!data.otp) {
          throw new Error("OTP not found");
        }

        if (data.otp !== Doctor.otp) {
          throw new Error("OTP is incorrect, Try again");
        }

        const update = await verifyDoctor(data.email);

        return update;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
