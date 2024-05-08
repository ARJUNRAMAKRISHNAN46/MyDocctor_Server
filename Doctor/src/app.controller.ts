import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Doctor } from './doctors/doctor.entity/doctor.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(doctorData: Doctor) {
    return this.appService.getHello(doctorData);
  }
}
