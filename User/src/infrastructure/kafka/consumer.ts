import { consumer } from ".";
import { createSubscriber } from "./subscriber";

export const runConsumer = async () => {
    try {
        await consumer.connect()
        await consumer.subscribe({
            topic: 'from-doctor' || 'from-auth',
            fromBeginning: true
        })
        const subscriber: any = createSubscriber()
        console.log('hello')
        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message
                console.log(key,'🚀🚀🚀🚀🚀🚀🚀');
                const subscriberMethod = String(key)
                const subscriberData = JSON.parse(String(value))
                console.log("🚀 ~ eachMessage: ~ subscriberData ~ :",subscriberMethod, subscriberData);

                try{
                    if(subscriber[subscriberMethod]) {
                        await subscriber[subscriberMethod](subscriberData);
                    } else {
                        console.log("Feature not implemented !")
                    }
                } catch(error: any) {
                    throw new Error(error?.message)
                }
            }
        })
    } catch (error: any) {
        throw new Error(error?.message)
    }
}

export const stopConsumer = async () => {
    await consumer.stop()
    await consumer.disconnect()
}