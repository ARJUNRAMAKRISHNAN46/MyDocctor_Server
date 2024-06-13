import User from "../models/user.model";

export const getDoctors = async (userId: string) => {
  try {
    const users = await User.find({
      _id: { $ne: userId },
      role: "doctor",
    });

    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
