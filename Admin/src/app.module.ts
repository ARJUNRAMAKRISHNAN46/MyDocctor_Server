import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DoctorProfileVerificaionService } from './app.service';
import { TestConsumer } from './kafka/test.consumer';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [DoctorProfileVerificaionService, TestConsumer],
})
export class AppModule {}
