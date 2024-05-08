import { Injectable, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

@Injectable()
export class ProduceService {
    private readonly kafka = new Kafka({
        brokers: ['localhost:29092'],
    });
    private readonly producer: Producer = this.kafka.producer();

    async OnModuleInit() {
        await this.producer.connect();
    }

    async produce(record: ProducerRecord) {
        await this.producer.send(record);
    }

    async onApplicationShutdown() {
        await this.producer.disconnect();
    }


}