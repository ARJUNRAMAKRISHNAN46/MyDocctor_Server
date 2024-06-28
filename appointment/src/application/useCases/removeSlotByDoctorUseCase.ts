import { IDependencies } from "../interfaces/IDependencies";

export const removeSlotByDoctorUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { removeSlotById },
  } = dependencies;

  return {
    execute: async (slotId: string) => {
      try {
        const slot = await removeSlotById(slotId);

        return slot;
      } catch (error: any) {
        return null;
      }
    },
  };
};
