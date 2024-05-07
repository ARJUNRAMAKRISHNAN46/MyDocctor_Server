import { Module } from '@nestjs/common';
import { ProduceService } from './producer.service';
import { ConsumerService } from './consumer.service';

@Module({
    providers: [ProduceService, ConsumerService],
    exports: [ProduceService, ConsumerService],
})
export class KafkaModule {}