import { Speciality } from "../models";
import { SpecialityEntity } from "@/domain/entities";

export const addSpeciality = async (
  data: SpecialityEntity,
  
): Promise<SpecialityEntity | null> => {
  try {
    const newSpec = await Speciality.create(data);

    if (!newSpec) {
      return null;
    }

    return newSpec as SpecialityEntity;
  } catch (error: any) {
    console.log(error?.message);
    console.log("Speciality adding failed");
    return null;
  }
};
