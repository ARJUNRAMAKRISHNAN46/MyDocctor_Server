export const getDoctorsUseCase = (dependencies: any) => {
  const {
    repositories: { getDoctors },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      return await getDoctors(userId);
    },
  };
};
