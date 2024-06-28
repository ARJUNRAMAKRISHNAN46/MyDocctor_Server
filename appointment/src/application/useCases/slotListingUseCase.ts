import { IDependencies } from "../interfaces/IDependencies";

export const slotListingUseCase = (dependencies: IDependencies) => {
    const { repositories: { slotListing } } = dependencies;

    return {
        execute: async (doctor_id: string) => {
            try {
                const slots = await slotListing(doctor_id);
            
                return slots;
            } catch (error: any) {
                console.log("🚀 ~ execute: ~ error:", error)
                return null
            }
        }
    }
}