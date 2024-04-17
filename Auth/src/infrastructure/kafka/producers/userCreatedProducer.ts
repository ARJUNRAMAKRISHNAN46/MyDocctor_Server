import { producer } from '..';
import { Schema } from 'mongoose';

export const userCreatedProducer = async (
    data: {
        _id: Schema.Types.ObjectId;
        name?: string;
        email?: string;
        password?: string;
        role?: string
    }
) => {
    try {
        await producer.connect()
        if(data.role === 'user' || data.role === 'admin'){
            const message = {
                topic: 'to-user',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
        } else if ( data.role === 'doctor') {
            const message = {
                topic: 'to-doctor',
                messages: [{
                    key: 'doctorCreated',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
        }
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}