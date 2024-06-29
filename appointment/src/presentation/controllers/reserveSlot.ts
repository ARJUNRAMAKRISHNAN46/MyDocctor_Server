import { Appointment } from "../../infrastructure/database/mongoDB/models";
import { Request, Response, NextFunction } from "express";

export const reserveSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { doctorId, date, slot } = req.body;
    
    console.log("🚀 ~ slot:", slot)
    if (!doctorId || !date || !slot) {
      return res.status(400).json({
        success: false,
        message: "doctorId, date, and slot are required fields.",
      });
    }

    const appointment = await Appointment.findOne({
      doctorId: doctorId,
      date: date,
      "slots.start": slot,
    });
    console.log("🚀 ~ appointment:", appointment)

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "No appointment found",
      });
    }

    const slots = appointment.slots.find((slt) => slt.start === slot);
    console.log("🚀 ~ slots:", slots)

    if (slot && slots?.status === "reserved") {
        console.log('-------------------------------------------------------------------------------------->');
        
      return res.status(404).json({
        success: false,
        message: "The slot is already reserved",
      });
    }

    const updateSlot = await Appointment.findOneAndUpdate(
      {
        doctorId,
        date,
        "slots.start": slot,
      },
      {
        $set: { "slots.$.status": "reserved" },
      },
      {
        new: true,
      }
    );

    if (!updateSlot) {
      return res.status(404).json({
        success: false,
        message: "Appointment or slot not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Slot reserved successfully.",
      appointment: updateSlot,
    });
  } catch (error: any) {
    console.error("Error updating slot status:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while reserving the slot.",
    });
  }
};
