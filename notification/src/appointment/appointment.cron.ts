import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { Appointment } from 'src/schema/appoitnment.schema';
import { User } from 'src/schema/user.schema';

@Injectable()
export class AppointmentCron implements OnModuleInit {
  private readonly logger = new Logger(AppointmentCron.name);
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<Appointment>,
    @InjectModel(User.name) private userModel: Model<User>
  ) {
    this.transporter = nodemailer.createTransport({
      port: 465,
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });
  }

  onModuleInit() {
    this.logger.log('AppointmentCron service initialized');
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async checkAppointments() {
    this.logger.log('Checking for upcoming appointments...');
    try {
      const now = new Date();
      const currentTime = now.getTime();
      const thirtyMinutesLater = new Date(currentTime + 30 * 60000).getTime();

      const appointments = await this.appointmentModel.find();

      for (const appointment of appointments) {
        for (const slot of appointment.slots) {
          const appointmentDate = new Date(
            `${appointment.date.split('-').reverse().join('-')}T${slot.start}:00`,
          );
          const appointmentTime = appointmentDate.getTime();

          if (
            appointmentTime > currentTime &&
            appointmentTime <= thirtyMinutesLater
          ) {
            const user = await this.userModel.findById(slot.userId);
            if (user) {
              this.sendEmail(user.email, slot.start);
            }
          }
        }
      }
    } catch (error) {
      this.logger.error('Error checking appointments:', error);
    }
  }

  private sendEmail(userEmail: string, appointmentTime: string) {
    const mailOptions = {
      from: 'mydoctor@gmail.com',
      to: userEmail,
      subject: 'Appointment Reminder',
      text: `You have an appointment scheduled at ${appointmentTime}`,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        this.logger.error('Error sending email:', error);
      } else {
        this.logger.log('Email sent: ' + info.response);
      }
    });
  }
}
