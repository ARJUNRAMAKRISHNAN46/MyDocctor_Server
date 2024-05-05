import { Injectable } from '@nestjs/common';
import { ProduceService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProduceService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'hello world'
        }
      ]
    })
    return 'Hello World!';
  }
}
