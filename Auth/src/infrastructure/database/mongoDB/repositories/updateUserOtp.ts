import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const updatePatientOtp = async (data: {
  email: string;
  otp: string;
}): Promise<UserEntity> => {
  try {
    const updateOtp = await User.findOneAndUpdate(
      {
        email: data.email,
      },
      {
        otp: data.otp,
      }
    );

    if (!updateOtp) {
      throw new Error("User otp update failed");
    }

    return updateOtp;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
