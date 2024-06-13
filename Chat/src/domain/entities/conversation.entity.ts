import { ObjectId } from "mongoose";

export interface IConversationEntity {
  _id?: ObjectId;
  participants?: ObjectId[];
  messages: ObjectId[];
  latestMessage: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
