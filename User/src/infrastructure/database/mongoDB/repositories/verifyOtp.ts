import { Otp } from "../models/otp";

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const DbOtp = await Otp.findOne({ email });
    if (otp === DbOtp?.otp) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
