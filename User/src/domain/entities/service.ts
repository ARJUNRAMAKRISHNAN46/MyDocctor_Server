import { ObjectId } from "mongodb";

export interface ServiceEntity {
    _id: ObjectId,
    serviceName: string,
    serviceImage: string,
    serviceDescription: string
}