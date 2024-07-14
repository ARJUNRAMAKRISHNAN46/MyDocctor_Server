import { Kafka, Producer, Consumer } from "kafkajs";


const kafka = new Kafka({
  clientId: "user-service-latest",
  brokers: ["pkc-12576z.us-west2.gcp.confluent.cloud:9092"],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: "7IZITQ7JNZQTWVPI",
    password: "9PcDObH4j/TZcDMBgPpBNldIOr/pfPK4bH2UPWchx+nEsrtt3Owl+Kk97FkwX4SJ",
  },
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
  groupId: "user-service-latest-kafka-group",
});

      // export const kafka = new Kafka({
      //     clientId: "user-service-latest",
      //     brokers: ["apache-kafka-service:29092"]
      // })
