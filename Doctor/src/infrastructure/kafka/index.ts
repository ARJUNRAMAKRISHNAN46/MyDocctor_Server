import { Kafka, Producer, Consumer } from "kafkajs";

const kafka = new Kafka({
  clientId: "doctor-service-latest",
  brokers: ["pkc-12576z.us-west2.gcp.confluent.cloud:29092"],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: "VSU5WQXBERVQNK2H",
    password:
      "x2oGLw7jrZwHCXGR7ELLQ5FMbHP9IvSw0e+JXF+1NTEfmjuUqePXUGKz7hTZnmaI",
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
