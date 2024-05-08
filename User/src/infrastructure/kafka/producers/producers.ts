import { producer } from '..';
import { Schema } from 'mongoose';

const doctorCreatedProducer = async (
    data: {
        _id: Schema.Types.ObjectId;
        name?: string;
        email?: string;
        mobileNumber?: string;
        password?: string;
        role?: string;
    }
) => {
    try {
        await producer.connect()
        if(data.role === 'doctor') {
            const message = {
                topic: 'to-doctor',
                messages: [{
                    key: 'doctorCreated',
                    value: JSON.stringify(data)
                }]
            }
        }
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}