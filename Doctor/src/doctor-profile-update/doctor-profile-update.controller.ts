import { Controller, Put, Param, Body } from '@nestjs/common';
import { DoctorProfileUpdateService } from './doctor-profile-update.service';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Controller('doctors')
export class DoctorProfileUpdateController {
  constructor(
    private readonly doctorProfileUpdateService: DoctorProfileUpdateService,
  ) {}

  @Put(':email/profile')
  async updateProfile(
    @Param('email') email: string,
    @Body() doctorData: Doctor,
  ): Promise<void> {
    await this.doctorProfileUpdateService.updateProfile(email, doctorData);
  }
}
