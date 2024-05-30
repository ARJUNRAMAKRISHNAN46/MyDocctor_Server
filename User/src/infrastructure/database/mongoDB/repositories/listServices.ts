import { Service } from "../models/service";
import { ServiceEntity } from "@/domain/entities/service";

export const serviceLists = async (): Promise<ServiceEntity[] | null> => {
  try {
    const services = await Service.find();

    return services;
  } catch (error: any) {
    return null;
  }
};
