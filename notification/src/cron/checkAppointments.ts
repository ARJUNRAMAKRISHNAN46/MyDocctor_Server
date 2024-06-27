// const mongoose = require('mongoose');
// const cron = require('node-cron');
// const nodemailer = require('nodemailer');

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const appointmentSchema = new mongoose.Schema({
//   date: String,
//   consultationMethods: Array,
//   slots: [
//     {
//       start: String,
//       _id: mongoose.Schema.Types.ObjectId,
//       userId: String,
//     },
//   ],
//   doctorId: String,
//   __v: Number,
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// const transporter = nodemailer.createTransport({
//     port: 465,
//     service: 'Gmail',
//     auth: {
//       user: String(process.env.EMAIL),
//       pass: String(process.env.PASSWORD),
//     },
//     secure: true,
// });

// const sendEmail = (userEmail: string, appointmentTime: string) => {
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: userEmail,
//     subject: 'Appointment Reminder',
//     text: `You have an appointment scheduled at ${appointmentTime}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };

// const checkAppointments = async () => {
//   const now = new Date();
//   const currentTime = now.getTime();
//   const thirtyMinutesLater = new Date(currentTime + 30 * 60000).getTime();

//   const appointments = await Appointment.find();

//   appointments.forEach((appointment) => {
//     appointment.slots.forEach((slot) => {
//       const appointmentDate = new Date(
//         `${appointment.date.split('-').reverse().join('-')}T${slot.start}:00`,
//       );
//       const appointmentTime = appointmentDate.getTime();

//       if (
//         appointmentTime > currentTime &&
//         appointmentTime <= thirtyMinutesLater
//       ) {
//         const userEmail = 'user-email@example.com';
//         sendEmail(userEmail, slot.start);
//       }
//     });
//   });
// };

// cron.schedule('* * * * *', () => {
//   console.log('Checking for upcoming appointments...');
//   checkAppointments();
// });
