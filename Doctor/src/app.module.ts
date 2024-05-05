import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorProfileUpdateService } from './doctor-profile-update/doctor-profile-update.service';
import { DoctorProfileUpdateModule } from './doctor-profile-update/doctor-profile-update.module';
import { DoctorCreateProfileService } from './doctor-create-profile/doctor-create-profile.service';
import { DoctorCreateProfileController } from './doctor-create-profile/doctor-create-profile.controller';
import { DoctorCreateProfileModule } from './doctor-create-profile/doctor-create-profile.module';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './kafka/test.consumer';

@Module({
  imports: [DoctorModule, DoctorProfileUpdateModule, DoctorCreateProfileModule, KafkaModule],
  controllers: [AppController, DoctorCreateProfileController],
  providers: [AppService, DoctorProfileUpdateService, DoctorCreateProfileService, TestConsumer],
})
export class AppModule {}
