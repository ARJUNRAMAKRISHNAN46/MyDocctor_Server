import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { DoctorProfileVerificaionService } from 'src/app.service';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly doctorProfileVerificaionService: DoctorProfileVerificaionService,
  ) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['to-doctor'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          const doctorData = JSON.parse(message.value.toString());

          try {
            await this.doctorProfileVerificaionService.verifyProfile(doctorData);
            console.log('Data saved:', doctorData);
          } catch (error) {
            console.error('Error saving data:', error.message);
          }
        },
      },
    );
  }
}