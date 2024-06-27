import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Slot {
  @Prop({ required: true })
  start: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: mongoose.Schema.Types.ObjectId;
}

@Schema()
export class Appointment extends Document {
  @Prop({ required: true })
  date: string;

  @Prop([Slot])
  slots: Slot[];

  @Prop({ required: true })
  doctorId: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
