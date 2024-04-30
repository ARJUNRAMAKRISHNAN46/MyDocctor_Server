import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const findDoctorByEmail = async (email: string): Promise<UserEntity | null> => {
    try {
        const existDoctor = await  
        return existDoctor as UserEntity
    } catch (error: any) {
        console.log("🚀 ~ findDoctorByEmail ~ error:", error?.message);
    }
}