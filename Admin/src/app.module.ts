import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DoctorService } from './app.service';
import { TestConsumer } from './kafka/test.consumer';
import { KafkaModule } from './kafka/kafka.module';
import { ConsumerService } from './kafka/consumer.service';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [DoctorService, TestConsumer, ConsumerService],
})
export class AppModule {}
