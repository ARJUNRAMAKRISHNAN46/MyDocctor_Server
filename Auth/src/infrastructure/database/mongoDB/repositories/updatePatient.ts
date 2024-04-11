import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const updatePatient = async (
  data: PatientEntity
): Promise<PatientEntity | null> => {
  try {
    const { _id, ...rest } = data;

    const updated = await Patient.findByIdAndUpdate(
      _id,
      {
        $set: { ...rest },
      },
      {
        new: true,
      }
    );

    if (!updated) {
      throw new Error("Patient update failed");
    }

    return updated;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};