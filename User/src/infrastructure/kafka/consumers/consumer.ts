import { User } from "../../../infrastructure/database/mongoDB/models";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "auth-client",
  brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({ groupId: "auth-group" });

export const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "from-auth" || "from-doctor" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value?.toString(),
      });
      try {
        if (message.value) {
          const userData = JSON.parse(message.value.toString());
          const existUser = await User.findOne({ email: userData?.email });
          console.log("🚀 ~ eachMessage: ~ existUser:", existUser);
          if (!existUser) {
            const result = await User.create(userData);
            console.log("🚀 User created:", result);
          } else {
            console.log("Email already exists!!");
          }
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }

      await consumer.commitOffsets([
        { topic, partition, offset: message.offset },
      ]);
    },
  });
};
