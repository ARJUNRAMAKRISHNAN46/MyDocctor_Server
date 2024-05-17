import { Speciality } from "../models/speciality";
import { SpecialityEntity } from "@/domain/entities";

export const addSpeciality = async (
  data: SpecialityEntity
): Promise<SpecialityEntity | null> => {
  try {
    const newSpec = await Speciality.create(data);
    console.log("🚀 ~ newSpec:", newSpec);

    if (!newSpec) {
      throw new Error("speciality added failed");
    }

    return newSpec;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
