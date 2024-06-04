import { IDependencies } from "../interfaces/IDependencies";

export const searchDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { searchDoctor },
  } = dependencies;

  return {
    execute: async (query: string) => {
      try {
        const searchDoctors = await searchDoctor(query);
        console.log("🚀 ~ execute:async ~ searchDoctors:", searchDoctors);

        return searchDoctors;
      } catch (error: any) {
        console.log("🚀 ~ execute:async ~ error:", error);
        return null;
      }
    },
  };
};
