import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      port: 465,
      service: 'Gmail',
      auth: {
        user: String(process.env.EMAIL),
        pass: String(process.env.PASSWORD),
      },
      secure: true,
    });
  }

  async sendMail(email: string, message: string) {
    const mailOptions = {
      from: 'mydocctor@gmail.com',
      to: email,
      subject: 'Appointment Update from MyDocctor.online',
      html: `<p style='color: red; font-size: 25px; letter-spacing: 2px'>${message}</p>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async cancelAppointment(
    email: string,
    message: string,
    doctorName: string,
    date: string,
    time: string,
  ) {
    console.log('🚀 ~ MailService ~ sendMail ~ email:', email, message);
    const mailOptions = {
      from: 'mydocctor@gmail.com',
      to: email,
      subject: message,
      html: `<p style='color: red; font-size: 25px; letter-spacing: 2px'> Your appointment with ${doctorName} on ${date} at ${time} was cancelled by doctor the fees will refund within 3 working days</p>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
