import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { DoctorService } from './app.service';
import { Doctor } from 'src/doctor/interfaces/doctor.interfaces';

@Controller('verify-Doctor-Profile')
export class AppController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.doctorService.getHello();
  }

  @Put()
  async verifyDoctor(@Body() doctorData: Doctor): Promise<void> {
    try {
      await this.doctorService.verifyProfile(doctorData);
    } catch (error) {
      throw new Error('Failed to verify doctor profile');
    }
  }
}
