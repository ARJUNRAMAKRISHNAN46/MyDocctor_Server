import { Injectable } from '@nestjs/common';
import { Doctor } from './interfaces/doctor.interfaces';
import { MongoClient, ObjectId } from 'mongodb';

@Injectable()
export class AppService {
  async createProfile(doctorData: Doctor): Promise<void> {
    console.log('🚀 ~ AppService ~ createProfile ~ doctorData:', doctorData);
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

  async findDoctorById(doctorId: string): Promise<Doctor> {
    const URL = process.env.MONGO_URL;
    if (!URL) {
      throw new Error('MongoDB URL is not provided');
    }

    const client = new MongoClient(URL);
    try {
      await client.connect();
      const database = client.db('MyDocctor-Docctor');
      const collection = database.collection('doctors');
      // const objectId = new ObjectId(doctorId);
      // console.log("🚀 ~ AppService ~ findDoctorById ~ objectId:", objectId)
      const doctorDocument = await collection.findOne({
        _id: new ObjectId(doctorId),
      });
      console.log(
        '🚀 ~ AppService ~ findDoctorById ~ doctorDocument:',
        doctorDocument,
      );
      if (!doctorDocument) {
        return null;
      }
      const doctor: Doctor = {
        _id: doctorDocument._id as ObjectId,
        name: doctorDocument.name,
        gender: doctorDocument.gender,
        email: doctorDocument.email,
        dob: doctorDocument.dob,
        mobile: doctorDocument.mobile,
        country: doctorDocument.country,
        state: doctorDocument.state,
        district: doctorDocument.district,
        city: doctorDocument.city,
        street: doctorDocument.street,
        pincode: doctorDocument.pincode,
        expertise: doctorDocument.expertise,
        yearsOfExp: doctorDocument.yearsOfExp,
        isVerified: doctorDocument.isVerified,
        medicalLicenseNumber: doctorDocument.medicalLicenseNumber,
        nameOfCollege: doctorDocument.nameOfCollege,
        currentWorkingHospital: doctorDocument.currentWorkingHospital,
        workingDays: doctorDocument.workingDays,
        languageKnown: doctorDocument.languageKnown,
        medicalLicensePhoto: doctorDocument.medicalLicensePhoto,
        experienceCertificatePhoto: doctorDocument.experienceCertificatePhoto,
        profilePhoto: doctorDocument.profilePhoto,
        availableShifts: doctorDocument.availableShifts,
      };
      return doctor;
    } finally {
      await client.close();
    }
  }

  async listDoctors(): Promise<Doctor[]> {
    const URL = process.env.MONGO_URL;
    if (!URL) {
      throw new Error('MongoDB URL is not provided');
    }
    const client = new MongoClient(URL);
    try {
      await client.connect();
      const database = client.db('MyDocctor-Docctor');
      const collection = database.collection('doctors');

      const doctorsCursor = collection.find({ role: 'doctor' });

      const doctorsDocs = await doctorsCursor.toArray();
      const doctors: Doctor[] = doctorsDocs.map((doc) => ({
        _id: doc._id,
        name: doc.name,
        gender: doc.gender,
        email: doc.email,
        dob: doc.dob,
        mobile: doc.mobile,
        country: doc.country,
        state: doc.state,
        district: doc.district,
        city: doc.city,
        street: doc.street,
        pincode: doc.pincode,
        expertise: doc.expertise,
        yearsOfExp: doc.yearsOfExp,
        isVerified: doc.isVerified,
        medicalLicenseNumber: doc.medicalLicenseNumber,
        nameOfCollege: doc.nameOfCollege,
        currentWorkingHospital: doc.currentWorkingHospital,
        workingDays: doc.workingDays,
        languageKnown: doc.languageKnown,
        medicalLicensePhoto: doc.medicalLicensePhoto,
        experienceCertificatePhoto: doc.experienceCertificatePhoto,
        profilePhoto: doc.profilePhoto,
        availableShifts: doc.availableShifts,
      }));
      return doctors;
    } catch (error: any) {
      console.error('Error in listing doctors:', error);
      throw error;
    } finally {
      await client.close();
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
