import { IDependencies } from "../interfaces/IDependencies";

export const removeUserIdFromSlotUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { removeUserIdFromSlot },
  } = dependencies;

  return {
    execute: async (slotId: string) => {
      try {
        const slot = await removeUserIdFromSlot(slotId);

        return slot;
      } catch (error: any) {
        return null;
      }
    },
  };
};
