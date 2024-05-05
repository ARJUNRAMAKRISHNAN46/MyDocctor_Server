import { Module } from '@nestjs/common';
import { DoctorProfileUpdateController } from './doctor-profile-update.controller';
import { DoctorProfileUpdateService } from './doctor-profile-update.service';

@Module({
  controllers: [DoctorProfileUpdateController],
  providers: [DoctorProfileUpdateService],
})
export class DoctorProfileUpdateModule {}
