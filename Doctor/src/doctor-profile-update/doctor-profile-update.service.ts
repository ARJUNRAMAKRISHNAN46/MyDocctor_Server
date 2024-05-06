import { Injectable } from '@nestjs/common';
import {MongoClient} from 'mongodb';
import { Doctor } from 'src/doctors/interfaces/doctor.interface';

@Injectable()
export class DoctorProfileUpdateService {
  async updateProfile(doctorData: Doctor): Promise<void> {

    console.log("🚀 ~ DoctorProfileUpdateService ~ updateProfile ~ URL:", doctorData)
    const URL = process.env.MONGO_URL;
    // console.log("🚀 ~ DoctorProfileUpdateService ~ updateProfile ~ URL:", URL)
    const CLIENT = new MongoClient(URL);

    try {
      await CLIENT.connect();

      const DATABASE = CLIENT.db('MyDocctor-Docctor');
      const COLLECTION = DATABASE.collection('doctors');
      const email = doctorData?.email;

      const updatedData = await COLLECTION.updateOne({email}, {$set : doctorData});
      console.log("🚀 ~ DoctorProfileUpdateService ~ updateProfile ~ updatedData:", updatedData)
      
    } finally {
      await CLIENT.close();
    }

  }
}
