import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "user-service-latest",
    // brokers: ["localhost:29092"]
    brokers: ["apache-kafka-service:29092"]
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "user-service-latest-kafka-group"
})