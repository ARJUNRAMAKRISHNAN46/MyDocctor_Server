import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { data } from 'src/dto/mail.dto';

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
}
