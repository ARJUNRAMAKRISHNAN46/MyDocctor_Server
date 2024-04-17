import { comparePassword } from "../../utils/bcrypt/comparePassword";
import { IDependencies } from "../interfaces/IDependencies";

export const loginUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findUserByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        const existPatient = await findUserByEmail(email);

        if (!existPatient?.password) {
          throw new Error("Invalid Email or Password");
        }
        console.log(password, existPatient.password);

        const match = await comparePassword(password, existPatient.password);

        if (!match) {
          throw new Error("Invalid Password");
        }

        return existPatient;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
