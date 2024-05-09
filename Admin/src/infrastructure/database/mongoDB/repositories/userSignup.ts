import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const userSignup = async (data: UserEntity): Promise<UserEntity | null> => {
    try {
        const newUser = await User.create(data);
        console.log("🚀 ~ userSignup ~ newUser:", newUser)
        
        if(!newUser) {
            throw new Error('Failed to create user');
        }

        return newUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}