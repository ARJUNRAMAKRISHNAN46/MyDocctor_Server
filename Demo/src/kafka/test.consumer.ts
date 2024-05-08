import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { AppService } from 'src/app.service';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly appService: AppService,
  ) {}

  async onModuleInit() {
    const topicsToConsume = ['from-auth', 'from-user'];

    for (const topic of topicsToConsume) {
      await this.consumerService.consume(
        { topics: [topic] },
        {
          eachMessage: async ({ topic, partition, message }) => {
            const doctorData = JSON.parse(message.value.toString());
            console.log("🚀 ~ TestConsumer ~ eachMessage: ~ doctorData:", doctorData)

            try {
              await this.appService.createProfile(doctorData);
              console.log('Data saved:', doctorData);
            } catch (error) {
              console.error('Error saving data:', error.message);
            }
          },
        },
      );
    }
  }
}
