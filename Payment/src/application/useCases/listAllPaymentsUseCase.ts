import { IDependencies } from "../interfaces/IDependencies";

export const listAllPaymentsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listAllPayments },
  } = dependencies;

  return {
    execute: async () => {
      return await listAllPayments();
    },
  };
};
