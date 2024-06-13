import { ObjectId } from "mongoose";

export interface IMessageEntity {
  _id?: ObjectId;
  senderId: ObjectId;
  recieverId: ObjectId;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
