import { producer } from "..";


export const userUpdateProducer = async (
    data: any | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'from-doctor',
            messages: [{
                key: 'doctorUpdated',
                value: JSON.stringify(data)
            }]
        };
        await  producer.send(message);
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}