import { User } from "../models";
import { UserEntity, bookingEntity } from "@/domain/entities";

export const updateBooking = async (
    data: bookingEntity, id:string
): Promise<UserEntity | null> => {
    try {
        const updateBooking = await User.findByIdAndUpdate(id,{
            availableShift: data
        });
        console.log("🚀 ~ updateBooking:", updateBooking);

        return updateBooking;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}