import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import 'dotenv/config';
import { AppointmentModule } from './appointment/appointment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MailModule,
    AppointmentModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://arjunpchr:kByWt9xdjtvhJ8AH@mydocctor-admin.bvshl1s.mongodb.net/?retryWrites=true&w=majority&appName=mydocctor-admin`,
    ),
  ],
})
export class AppModule {}
