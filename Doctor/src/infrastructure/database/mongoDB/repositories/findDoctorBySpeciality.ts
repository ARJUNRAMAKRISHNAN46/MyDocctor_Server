import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const findDoctorBySpeciality = async (speciality: string): Promise<UserEntity[] | null> => {
    try {
        const doctors = await User.find({expertise: speciality, isActive: true, isVerified: true});
        console.log("🚀 ~ findDoctorBySpeciality ~ doctors:", doctors);

        if(!doctors) {
            throw new Error("No doctors found");
        }

        return doctors;
    } catch (error :any) {
        throw new Error(error?.message);
    }
}