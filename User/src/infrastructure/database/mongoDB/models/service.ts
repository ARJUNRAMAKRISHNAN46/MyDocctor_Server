import { Schema, model } from "mongoose";
import { ServiceEntity } from "@/domain/entities/service";

const serviceSchema = new Schema({
  serviceName: { type: String },
  serviceImage: { type: String },
  serviceDescription: { type: String },
});

export const Service = model<ServiceEntity>("Service", serviceSchema);
