import { IDependencies } from "../interfaces/IDependencies";
import { UserEntity } from "../../domain/entities";

export const createUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createUser },
  } = dependencies;

  return {
    execute: async (data: UserEntity) => {
      try {
        return await createUser(data);
      } catch (error: any) {
        throw new Error(error?.message || "Patient created failed");
      }
    },
  };
};
