// kafka.module.ts
import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ConsumerService } from './consumer/consumer.service';

@Module({
  providers: [AppService, ConsumerService],
  exports: [ConsumerService],
})
export class KafkaModule {}
