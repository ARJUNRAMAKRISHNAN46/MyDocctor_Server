import { Controller, Put, Body } from '@nestjs/common';
import { DoctorProfileUpdateService } from './doctor-profile-update.service';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Controller('api/doctors')
export class DoctorProfileUpdateController {
  constructor(
    private readonly doctorProfileUpdateService: DoctorProfileUpdateService,
  ) {}

  @Put('/update-profile')
  async updateProfile(
    @Body() doctorData: Doctor,
  ): Promise<void> {    
    console.log('pointer is her @doctor-profile-update.controller-15');
    doctorData.isVerified = false;
    await this.doctorProfileUpdateService.updateProfile(doctorData);
  }
}
