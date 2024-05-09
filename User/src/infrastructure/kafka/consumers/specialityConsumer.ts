import { Speciality } from "@/infrastructure/database/mongoDB/models";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "user-spec",
    brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({ groupId: "user-group" });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "from-doctor" || "from-auth" });

    await consumer.run({
        eachMessage: async({topic, partition, message}) => {
            console.log({
                value: message?.value?.toString(),
            });

            await Speciality.create(message?.value?.toString());
            await consumer.commitOffsets([
                { topic, partition, offset: message.offset },
            ]);
        }
    })
}

runConsumer().catch(console.error);