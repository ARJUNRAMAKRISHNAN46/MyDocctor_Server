import { producer } from "..";
import { Schema } from "mongoose";

const doctorCreatedProducer = async (data: {
  _id: Schema.Types.ObjectId;
  name?: string;
  email?: string;
  mobileNumber?: string;
  password?: string;
  role?: string;
}) => {
  try {
    await producer.connect();
    if (data.role === "doctor" || data.role === "admin" || data.role === "user") {
      const message = {
        topic: "from-user",
        messages: [
          {
            key: "userCreated",
            value: JSON.stringify(data),
          },
        ],
      };
      console.log(message);
    }
  } catch (error: any) {
    console.error("kafka produce error", error?.message);
  } finally {
    await producer.disconnect();
  }
};
