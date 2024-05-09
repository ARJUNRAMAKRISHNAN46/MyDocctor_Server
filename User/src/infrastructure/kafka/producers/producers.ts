import { AvailableShift } from "../../../domain/entities";
import { producer } from "..";
import { Schema } from "mongoose";

export const userCreatedProducer = async (data: {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  mobileNumber?: string;
  role?: string;
  isBlocked?: boolean;
  otp: string;
  dob?: string;
  favouriteDoctor: object[];
  address: object[];
  appointments: object[];
  expertise?: string;
  education?: string;
  dateOfBirth?: string;
  languagesKnown?: string[];
  currentWorkingHospital?: string;
  gender?: string;
  yearsOfExperience?: number;
  workingDays?: string[];
  medicalLisenceNumber?: string;
  avatar?: string;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  isProfile?: boolean;
  availableShifts: AvailableShift[];
}) => {
  try {
    await producer.connect();
    if (
      data.role === "user" ||
      data.role === "admin" ||
      data.role === "doctor"
    ) {
      const message = {
        topic: "from-auth",
        messages: [
          {
            key: "userCreated",
            value: JSON.stringify(data),
          },
        ],
      };
      await producer.send(message);
    }
    // else if (data.role === "doctor") {
    //   const message = {
    //     topic: "from-auth",
    //     messages: [
    //       {
    //         key: "doctorCreated",
    //         value: JSON.stringify(data),
    //       },
    //     ],
    //   };
    //   await producer.send(message);
    // }
  } catch (error: any) {
    console.error("kafka produce error", error?.message);
  } finally {
    await producer.disconnect();
  }
};
