import { Schema, model } from "mongoose";
import { bookingEntity } from "../../../../domain/entities";

const bookingSchema = new Schema({
  date: { type: String },
  methods: [{
    method: { type: String },
    status: { type: Boolean }
  }],
  shifts: [{
    shift: { type: String },
    slots: [{
      time: { type: String },
      status: { type: Boolean }
    }]
  }]
});

export const Booking = model<bookingEntity>("booking", bookingSchema);
