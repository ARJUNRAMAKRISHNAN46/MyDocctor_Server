import { IDependencies } from "../interfaces/IDependencies";
import { comparePassword } from '../../utils/bcrypt/comparePassword';

export const loginDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findDoctorByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        const existDoctor = await findDoctorByEmail(email);

        if (!existDoctor?.password) {
          throw new Error("Incorrect Email or Password");
        }

        const match = comparePassword(password, existDoctor.password);

        if (!match) {
          throw new Error("Incorrect Email or Password");
        }

        return existDoctor;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
