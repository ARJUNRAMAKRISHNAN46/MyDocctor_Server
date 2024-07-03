import { IDependencies } from "../interfaces/IDependencies";

export const findSlotByIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findSlotById },
  } = dependencies;

  return {
    execute: async (slotId: string) => {
      try {
        const slot = await findSlotById(slotId);
        console.log("🚀 ~ execute: ~ slot:", slot)

        return slot;
      } catch (error: any) {
        return null;
      }
    },
  };
};
