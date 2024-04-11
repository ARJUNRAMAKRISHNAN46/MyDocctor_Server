import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const updatePatientPassword = async (data: {
  email: string;
  password: string;
}): Promise<PatientEntity> => {
  try {
    const updatePassword = await Patient.findOneAndUpdate(
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

    if (!updatePassword) {
      throw new Error("patient password update failed");
    }

    return updatePassword;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
