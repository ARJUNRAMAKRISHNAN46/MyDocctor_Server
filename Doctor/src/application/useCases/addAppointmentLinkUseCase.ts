import { IDependencies } from "../interfaces/IDependencies";

export const addAppointmentLinkUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { addAppointmentLink },
  } = dependencies;

  return {
    execute: async (id: string, link: string) => {
      try {
        const linkAdded = await addAppointmentLink(id, link);

        return linkAdded;
      } catch (error: any) {
        console.log("🚀 ~ execute:async ~ error:", error);
        return null;
      }
    },
  };
};
