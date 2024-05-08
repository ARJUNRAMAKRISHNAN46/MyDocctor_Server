import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello(doctorData: any) {
    try {
      await this.producerService.produce({
        topic: 'to-user',
        messages: [{ value: JSON.stringify(doctorData) }],
      });

      await this.producerService.produce({
        topic: 'to-auth',
        messages: [{ value: JSON.stringify(doctorData) }],
      });

      return 'Doctor data sent successfully to both topics.';
    } catch (error) {
      console.error('Error producing messages:', error);
      throw error;
    }
  }
}
