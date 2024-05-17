import { SpecialityEntity } from "@/domain/entities";
import { Speciality } from "../models/speciality";

export const listSpeciality = async (): Promise<SpecialityEntity[] | null> => {
  try {
    const specialities = await Speciality.find();
    console.log("🚀 ~ listSpeciality ~ specialities:", specialities);

    return specialities;
  } catch (error: any) {
    console.log("🚀 ~ listSpeciality ~ error:", error);
    return null;
  }
};
