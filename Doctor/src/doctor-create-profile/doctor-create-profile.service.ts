import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Injectable()
export class DoctorCreateProfileService {
  async createProfile(doctorData: Doctor): Promise<void> {
    const URL = process.env.MONGO_URL;

    if (!URL) {
      throw new Error('MongoDB URL is not provided.');
    }

    const client = new MongoClient(URL);

    try {
      await client.connect();

      const database = client.db('MyDocctor-Docctor');
      const collection = database.collection('doctors');

      const createdData = await collection.insertOne(doctorData);
      console.log(
        '🚀 ~ DoctorCreateProfileService ~ createProfile ~ createdData:',
        createdData,
      );
    } finally {
      await client.close();
    }
  }
}
