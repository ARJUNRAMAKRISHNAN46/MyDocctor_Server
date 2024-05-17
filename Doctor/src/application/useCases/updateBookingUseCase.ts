import { bookingEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const updateBookingUseCase = (dependencies: IDependencies) => {
    const { repositories: { updateBooking } } = dependencies;

    return {
        execute: async(data: bookingEntity, id: string) => {
            console.log("🚀 ~ execute:async ~ data:", data)
            console.log("🚀 ~ execute:async ~ id:", id)
            try {
                const updateData = await updateBooking(data,id);
                console.log("🚀 ~ execute:async ~ updateData:", updateData);

                return updateData
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}