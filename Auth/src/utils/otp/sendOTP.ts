import nodemailer from "nodemailer";
import { EMAIL, PASSWORD } from "../../config/envConfig/config";

export const sendOTP = async (email: string, otp: number | string) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "Gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  const message = "Enter this OTP to continue";
  const mailData = {
    from: "mydocctor@gmail.com",
    to: email,
    subject: "OTP from MyDocctor.online",
    html: `<p>${message}</p> <p style='color: red; font-size: 25px; letter-spacing: 2px'><b>${otp}</b></p>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    return new Promise((resolve, reject) => {
      if (error) {
        console.log("Error occured while sending the OTP", error);
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};
