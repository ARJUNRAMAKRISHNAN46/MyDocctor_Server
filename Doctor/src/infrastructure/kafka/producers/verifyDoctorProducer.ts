import { producer } from "..";

export const verifyDoctorProducer = async (
    data: any | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'from-doctor',
            messages: [{
                key: 'verifyDoctor',
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