import { IDependencies } from "../interfaces/IDependencies";

interface FilterParams {
  name?: string;
  country?: string;
  speciality?: string;
  sort?: string;
  consultationType?: string[];
}

export const filterDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { filterDoctor },
  } = dependencies;

  return {
    execute: async (params: FilterParams) => {
      try {
        const filteredDoctors = await filterDoctor(params);
        console.log("🚀 ~ execute:async ~ filteredDoctors:", filteredDoctors);
        return filteredDoctors;
      } catch (error: any) {
        console.log("🚀 ~ execute:async ~ error:", error);
        return null;
      }
    },
  };
};
