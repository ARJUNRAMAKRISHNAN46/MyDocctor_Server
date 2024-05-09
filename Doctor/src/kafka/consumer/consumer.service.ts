import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { AppService } from 'src/app.service';

@Injectable()
export class ConsumerService implements OnModuleInit {
  private readonly kafka = new Kafka({
    brokers: ['localhost:29092'],
  });

  private readonly consumer: Consumer;

  constructor(private readonly appService: AppService) {
    this.consumer = this.kafka.consumer({ groupId: 'user-service-group' });
  }

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'from-auth' || 'from-user' });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const messageValue = message.value?.toString();
        if (messageValue) {
          try {
            const userData = JSON.parse(messageValue);
            console.log('Parsed userData:', userData);
            await this.appService.createProfile(userData);
          } catch (error) {
            console.error('Error processing message', error);
          }
        }
      },
    });
  }

  async onApplicationShutdown() {
    await this.consumer.disconnect();
  }
}
