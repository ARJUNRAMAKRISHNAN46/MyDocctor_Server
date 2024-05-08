import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './kafka/test.consumer';
import { ConsumerService } from './kafka/consumer.service';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService,TestConsumer, ConsumerService],
})
export class AppModule {}