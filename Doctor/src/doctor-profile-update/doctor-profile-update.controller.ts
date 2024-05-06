import { Controller, Put, Body } from '@nestjs/common';
import { DoctorProfileUpdateService } from './doctor-profile-update.service';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Controller('doctors')
export class DoctorProfileUpdateController {
  constructor(
    private readonly doctorProfileUpdateService: DoctorProfileUpdateService,
  ) {}

  @Put(':email/profile')
  async updateProfile(
    @Body() doctorData: Doctor,
  ): Promise<void> {    
    await this.doctorProfileUpdateService.updateProfile(doctorData);
  }
}
