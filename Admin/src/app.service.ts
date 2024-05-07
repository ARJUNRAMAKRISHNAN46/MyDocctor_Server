import { Injectable } from '@nestjs/common';
import { Doctor } from './doctor/interfaces/doctor.interfaces';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

@Injectable()
export class DoctorProfileVerificaionService {
  async verifyProfile(doctorData: Doctor): Promise<void> {
    const URL = process.env.MONGO_URL;

    if (!URL) {
      throw new Error('Mongodb URL is not provided');
    }

    const client = new MongoClient(URL);

    try {
      await client.connect();

      const database = client.db('MyDocctor_User');
      const collection = database.collection('users');

      const filter = {
        _id: new ObjectId(doctorData._id),
      };
      const update = { $set: doctorData };

      const verifiedData = await collection.updateOne(filter, update);
      console.log(verifiedData?.modifiedCount);
    } finally {
      await client.close();
    }
  }
 async getHello() {
  return 'hello world'
 }
}
