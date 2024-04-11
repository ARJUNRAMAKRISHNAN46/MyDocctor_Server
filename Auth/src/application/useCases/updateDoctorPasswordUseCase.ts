import { IDependencies } from "../interfaces/IDependencies";

export const updateDoctorPasswordUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updateDoctorPassword },
  } = dependencies;

  return {
    execute: async (data: { email: string; password: string }) => {
      return await updateDoctorPassword({
        email: data.email,
        password: data.password,
      });
    },
  };
};
