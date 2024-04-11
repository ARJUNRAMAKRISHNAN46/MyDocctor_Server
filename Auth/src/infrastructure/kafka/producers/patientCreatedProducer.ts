import { ObjectId, TypeExpressionOperatorReturningObjectId, Types } from 'mongoose';
import { producer } from '..';

export const patientCreatedProducer = async (
    data: {
        _id: Types.ObjectId;
        name: string;
        email: string;
        password: string;
        role: string
    }
) => {
    try {
        await producer.connect();
        if(data.role === 'patient' || data.role === 'admin') {
            const message = {
                
            }
        }
    } catch (error: any) {
        console.log(error?.message);
    }
}