// import { Body, Controller, Post } from '@nestjs/common';
// import { AppointmentService } from './appointment.service';
// import { appointment } from 'src/dto/mail.dto';

// @Controller('appointment')
// export class AppointmentController {
//   constructor(private readonly appointmentService: AppointmentService) {}

//   @Post('/send-reminder')
//   async sendReminder(@Body() data: appointment) {
//     console.log('🚀 ~ AppointmentController ~ sendReminder ~ data:', data);
//     await this.appointmentService.sendMail(data?.email, data?.time);
//     return 'Reminder sent';
//   }
// }
