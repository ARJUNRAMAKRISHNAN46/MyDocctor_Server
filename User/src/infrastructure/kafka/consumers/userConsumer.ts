import { User } from "../../../infrastructure/database/mongoDB/models";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "user-client",
  brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({ groupId: "auth-group" });

export const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "from-auth" || "from-doctor" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (!message.value) {
        console.warn("Received a message with null value.");
        return;
      }

      console.log({
        value: message.value?.toString(),
      });

      try {
        const userData = JSON.parse(message.value.toString());
        const result = await User.create(userData);
        console.log("🚀 User created:", result);
      } catch (error) {
        console.error("Error creating user:", error);
      }

      await consumer.commitOffsets([
        { topic, partition, offset: message.offset },
      ]);
    },
  });
};