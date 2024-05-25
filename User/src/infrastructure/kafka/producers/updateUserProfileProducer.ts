import { producer } from "..";


export const updateUserProducer = async (
    data: any | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'from-user',
            messages: [{
                key: 'userProfileUpdate',
                value: JSON.stringify(data)
            }]
        };
        await  producer.send(message);
        console.log("data sended successfully",message)
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}