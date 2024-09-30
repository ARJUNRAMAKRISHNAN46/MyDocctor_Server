import { Kafka, Producer, Consumer } from "kafkajs";

const kafka = new Kafka({
  clientId: "doctor-service-latest",
  brokers: ["pkc-12576z.us-west2.gcp.confluent.cloud:9092"],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: String(process.env.KAFKA_USERNAME),
    password: String(process.env.KAFKA_PASSWORD),
  },
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
  groupId: "doctor-service-kafka-group",
});

// export const kafka = new Kafka({
//     clientId: "doctor-service",
//     brokers: ["apache-kafka-service:29092"]
// })
