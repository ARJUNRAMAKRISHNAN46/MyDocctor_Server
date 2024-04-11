import { comparePassword } from "../../utils/bcrypt/comparePassword";
import { IDependencies } from "../interfaces/IDependencies";

export const loginPatientUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findPatientByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        const existPatient = await findPatientByEmail(email);

        if(!existPatient?.password) {
          throw new Error('Invalid Email or Password');
        }

        const match = await comparePassword(password, existPatient.password);

        if(!match) {
          throw new Error('Invalid Email or Password');
        }

        return existPatient;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
