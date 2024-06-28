import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { data, slot } from 'src/dto/mail.dto';

@Controller('mail')
export class MailController {
    constructor(
        private readonly mailService: MailService,
    ) {}

    @Post('/send-mail')
    async sendMail(@Body() data: data) {
        console.log("🚀 ~ MailController ~ sendMail ~ data:", data)
        await this.mailService.sendMail(
            data?.email, data?.message
        )
        return "Email sent"
    }

    @Post('/cancel-appointment')
    async cancelAppointment(@Body() data: slot) {
        console.log("🚀 ~ MailController ~ cancelAppointment ~ data:", data)
        await this.mailService.cancelAppointment(
            data?.email, data?.message, data?.doctorName, data?.date, data?.time
        )
         return "Cancellation email sent"
    }
}
