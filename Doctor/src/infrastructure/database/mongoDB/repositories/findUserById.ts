import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const findUserById = async (id: string): Promise<UserEntity | null> => {
    try {
        const existUser = await User.findById(id);

        if(!existUser) {
            throw new Error('Patient does not exist');
        }

        return existUser;

    } catch (error: any) {
        throw new Error(error?.message)
    }
}