import { Module } from '@nestjs/common';
import { DoctorCreateProfileController } from './doctor-create-profile.controller';
import { DoctorCreateProfileService } from './doctor-create-profile.service';

@Module({
    controllers: [DoctorCreateProfileController],
    providers: [DoctorCreateProfileService],
})
export class DoctorCreateProfileModule {}
