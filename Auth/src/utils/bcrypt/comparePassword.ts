import { compare } from "bcrypt";

export const comparePassword = async (original: string, hashed: string) => {
  try {
    const match = await compare(original, hashed);

    if (!match) {
      return false;
    }

    return true;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
