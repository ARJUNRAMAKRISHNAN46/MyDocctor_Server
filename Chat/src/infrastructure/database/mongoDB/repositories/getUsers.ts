import User from "../models/user.model";

export const getUsers = async (userId: string) => {
  try {
    const users = await User.find({
      _id: { $ne: userId },
      role: "user",
    });

    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
