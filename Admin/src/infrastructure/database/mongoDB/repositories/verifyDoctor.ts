import { User } from "../models/user";
import { UserEntity } from "../../../../domain/entities";

export const verifyDoctor = async (id: string): Promise<UserEntity | null> => {
    try {
        const doctor = await User.findByIdAndUpdate(id, { isVerified: true });
        return doctor;
    } catch (error: any) {
        console.log(error?.message);
        return null;
    }
}
