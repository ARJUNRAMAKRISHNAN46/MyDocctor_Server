import { SpecialityEntity } from "@/domain/entities";
import { producer } from "..";

export const specialityCreatedProducer = async (data: SpecialityEntity) => {
    try {
        await producer.connect();
        const message = {
            topic: "user-speciality",
            messages: [
                {
                    key: "specialityCreated",
                    value: JSON.stringify(data),
                }
            ]
        }
        console.log(message);
    } catch (error: any) {
        console.error("kafka produce error", error?.message);
    } finally {
        await producer.disconnect();
    }
}