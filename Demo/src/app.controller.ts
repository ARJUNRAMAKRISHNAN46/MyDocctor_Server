import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Doctor } from './interfaces/doctor.interfaces';

@Controller('api/doctors')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('doctor-create-profile')
  async createProfile(@Body() doctorData: Doctor): Promise<void> {
    try {
      await this.appService.createProfile(doctorData);
    } catch (error) {
      throw new Error('Failed to create doctor profile');
    }
  }

  @Put('/update-profile')
  async updateProfile(@Body() doctorData: Doctor): Promise<void> {
    await this.appService.updateProfile(doctorData);
  }
}