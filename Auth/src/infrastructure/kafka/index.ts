import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "auth-service",
    // brokers: ["apache-kafka-service:29092"]
    brokers: ["kafka.kafka.svc.cluster.local:9092"]

})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "auth-service-kafka-group"
})