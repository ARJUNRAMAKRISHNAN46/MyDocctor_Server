import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from 'src/schema/appoitnment.schema';
import { AppointmentCron } from './appointment.cron';
import { User, UserSchema } from 'src/schema/user.schema';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [AppointmentCron, AppointmentService],
  exports:[AppointmentCron]
})
export class AppointmentModule {}
