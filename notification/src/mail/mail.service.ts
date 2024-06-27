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
    console.log("🚀 ~ MailService ~ sendMail ~ email:", email, message)
    const mailOptions = {
        from: "mydocctor@gmail.com",
        to: email,
        subject: "Appointment Update from MyDocctor.online",
        html: `<p style='color: red; font-size: 25px; letter-spacing: 2px'>${message}</p>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
