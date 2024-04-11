import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const verifyDoctor = async (
  email: string
): Promise<DoctorEntity | null> => {
  try {
    const update = await Doctor.findOneAndUpdate(
      {
        email: email,
      },
      {
        otp: "",
        isVerified: true,
      },
      {
        new: true,
      }
    );

    if (!update) {
      throw new Error("Doctor verify failed");
    }

    return update;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
