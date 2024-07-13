import { Kafka, Producer, Consumer } from "kafkajs";

// export const kafka = new Kafka({
//     clientId: "doctor-service",
//     brokers: ["apache-kafka-service:29092"]
// })

const kafka = new Kafka({
    clientId: 'auth-client',
    brokers: ['pkc-4j8dq.southeastasia.azure.confluent.cloud:9092'],
    ssl: true,
    sasl: {
      mechanism: 'plain',
      username: '7IZITQ7JNZQTWVPI',
      password: '9PcDObH4j/TZcDMBgPpBNldIOr/pfPK4bH2UPWchx+nEsrtt3Owl+Kk97FkwX4SJ'
    }
  });

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "doctor-service-kafka-group"
})