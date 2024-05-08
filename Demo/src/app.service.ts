import { Injectable } from '@nestjs/common';
import { Doctor } from './interfaces/doctor.interfaces';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  async createProfile(doctorData: Doctor): Promise<void> {
    console.log("🚀 ~ AppService ~ createProfile ~ doctorData:", doctorData)
    const URL = process.env.MONGO_URL;

    if (!URL) {
      throw new Error('MongoDB URL is not provided');
    }

    const client = new MongoClient(URL);

    try {
      await client.connect();

      const database = client.db('MyDocctor-Docctor');
      const collection = database.collection('doctors');

      const createData = await collection.insertOne(doctorData);
      console.log('🚀 ~ AppService ~ createProfile ~ createData:', createData);
    } catch (error) {
      throw new Error(error);
    } finally {
      await client.close();
    }
  }

  async updateProfile(doctorData: Doctor): Promise<void> {
    const URL = process.env.MONGO_URL;
    if (!URL) {
      throw new Error('MongoDB URL is not provide');
    }
    const client = new MongoClient(URL);
    try {
      await client.connect();
      const database = client.db('MyDocctor-Docctor');
      const collection = database.collection('doctors');
      const email = doctorData?.email;
      const updatedData = await collection.updateOne(
        { email },
        { $set: doctorData },
      );
      console.log(
        '🚀 ~ AppService ~ updateProfile ~ updatedData:',
        updatedData,
      );
    } catch (error) {
      throw new Error(error);
    } finally {
      await client.close();
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
