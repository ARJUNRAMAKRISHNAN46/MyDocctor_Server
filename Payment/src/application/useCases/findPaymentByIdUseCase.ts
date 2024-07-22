import { IDependencies } from "../interfaces/IDependencies";

export const findPaymentByIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findPaymentById },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await findPaymentById(id);
    },
  };
};
