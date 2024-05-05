import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { DoctorCreateProfileService } from 'src/doctor-create-profile/doctor-create-profile.service';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly doctorCreateProfileService: DoctorCreateProfileService,
  ) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['to-doctor'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          const doctorData = JSON.parse(message.value.toString());

          try {
            await this.doctorCreateProfileService.createProfile(doctorData);
            console.log('Data saved:', doctorData);
          } catch (error) {
            console.error('Error saving data:', error.message);
          }
        },
      },
    );
  }
}
