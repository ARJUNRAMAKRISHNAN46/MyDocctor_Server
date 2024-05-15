import { IDependencies } from "../interfaces/IDependencies";

export const verifyUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { verifyUser },
  } = dependencies;

  return {
    execute: async (email: string) => {
      try {
        console.log("🚀 ~ execute: ~ email:", email);

        const verified = await verifyUser(email);
        console.log("🚀 ~ execute: ~ verified:", verified);
        return verified;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
