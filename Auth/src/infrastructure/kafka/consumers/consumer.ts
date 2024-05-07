import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "auth-client",
  brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({ groupId: "auth-group" });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "auth-to-user" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value?.toString(),
      });
      await consumer.commitOffsets([
        { topic, partition, offset: message.offset },
      ]);
    },
  });
};

runConsumer().catch(console.error);
