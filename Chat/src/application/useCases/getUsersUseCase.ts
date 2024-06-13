export const getUsersUseCase = (dependencies: any) => {
  const {
    repositories: { getUsers },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      return await getUsers(userId);
    },
  };
};
