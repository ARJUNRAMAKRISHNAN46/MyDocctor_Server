import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const updateDoctorPassword = async (data: {
  email: string;
  password: string;
}): Promise<DoctorEntity | null> => {
  try {
    const updatedPassword = await Doctor.findOneAndUpdate(
      {
        email: data.email,
      },
      {
        password: data.password,
      },
      {
        new: true,
      }
    );

    if (!updatedPassword) {
      throw new Error("doctor password update failed");
    }

    return updatedPassword;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
