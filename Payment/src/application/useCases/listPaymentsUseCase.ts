import { IDependencies } from "../interfaces/IDependencies";

export const listPaymentsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { listPayments },
  } = dependencies;

  return {
    execute: async (doctorId: string) => {
      return await listPayments(doctorId);
    },
  };
};
