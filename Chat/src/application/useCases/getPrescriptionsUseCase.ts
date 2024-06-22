export const getPrescriptionsUseCase = (dependencies: any) => {
  const {
    repositories: { getPrescription },
  } = dependencies;

  return {
    execute: async (recieverId: string) => {
      return await getPrescription(recieverId);
    },
  };
};
