import { IDependencies } from "../interfaces/IDependencies";

export const updatePatientPasswordUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updatePatientPassword },
  } = dependencies;

  return {
    execute: async (data: { email: string; password: string }) => {
      return await updatePatientPassword({
        email: data.email,
        password: data.password,
      });
    },
  };
};
