import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../doctors/doctor.entity/doctor.entity';

@Injectable()
export class DoctorService{
    constructor(
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>,
      ) {}
    
      async create(doctorData: Partial<Doctor>): Promise<Doctor> {
        const doctor = this.doctorRepository.create(doctorData);
        return this.doctorRepository.save(doctor);
      }
// export class DoctorService implements OnModuleInit, OnModuleDestroy{
    // constructor(private readonly kafkaConsumerService: ) {}

    // async onModuleInit() {
    //     await this.kafkaConsumerService.connect();
    //     await this.kafkaConsumerService.subscribeToTopics();
    //     await this.kafkaConsumerService.consume();    
    // }

    // async onModuleDestroy() {
    //     await this.kafkaConsumerService.disconnect();    
    // }

    
}
