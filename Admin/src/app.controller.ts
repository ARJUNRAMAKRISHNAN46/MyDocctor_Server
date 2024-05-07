import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { DoctorProfileVerificaionService } from './app.service';
import { Doctor } from 'src/doctor/interfaces/doctor.interfaces';

@Controller('verify-Doctor-Profile')
export class AppController {
  constructor(private readonly doctorProfileVerificaionService: DoctorProfileVerificaionService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.doctorProfileVerificaionService.getHello();
  }

  @Put()
  async verifyDoctor(@Body() doctorData: Doctor): Promise<void> {
    try {
      await this.doctorProfileVerificaionService.verifyProfile(doctorData);
    } catch (error) {
      throw new Error('Failed to verify doctor profile');
    }
  }
}
