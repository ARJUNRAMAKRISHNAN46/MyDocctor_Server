import { Service } from "../models/service";
import { ServiceEntity } from "@/domain/entities/service";

export const addService = async (
  data: ServiceEntity
): Promise<ServiceEntity | null> => {
  try {
    const newService = await Service.create(data);
    console.log("🚀 ~ newService:", newService)

    if (!newService) {
      throw new Error("Service added successfully");
    }

    return newService;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
