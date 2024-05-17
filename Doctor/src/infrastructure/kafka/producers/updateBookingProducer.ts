import { producer } from "..";


export const updateBookingProducer = async (
    data: any | null
) => {
    console.log("🚀 ~ data------->>>>>>>>>:", data)
    try {
        await producer.connect()

        const message = {
            topic: 'from-doctor',
            messages: [{
                key: 'updatedBooking',
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