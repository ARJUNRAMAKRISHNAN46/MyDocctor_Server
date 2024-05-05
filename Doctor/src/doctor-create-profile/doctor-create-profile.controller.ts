import { Controller, Post, Param, Body } from '@nestjs/common';
import { DoctorCreateProfileService } from './doctor-create-profile.service';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Controller('doctor-create-profile')
export class DoctorCreateProfileController {
  constructor(
    private readonly doctorCreateProfileService: DoctorCreateProfileService,
  ) {}

  @Post()
  async createProfile(@Body() doctorData: Doctor): Promise<void> {
    try {
        await this.doctorCreateProfileService.createProfile(doctorData);
    } catch (error: any) {
      throw new Error('Failed to create doctor profile');
    }
  }
}
