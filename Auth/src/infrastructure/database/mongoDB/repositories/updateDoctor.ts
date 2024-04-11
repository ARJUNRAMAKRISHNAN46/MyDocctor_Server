import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const updateDoctor = async (
  data: DoctorEntity
): Promise<DoctorEntity | null> => {
  try {
    const { _id, ...rest } = data;

    const updated = await Doctor.findByIdAndUpdate(
      _id,
      {
        $set: { ...rest },
      },
      {
        new: true,
      }
    );

    if (!updated) {
      throw new Error("Doctor update failed");
    }

    return updated;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
