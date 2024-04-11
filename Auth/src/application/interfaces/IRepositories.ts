import { PatientEntity } from "../../domain/entities";
import { DoctorEntity } from "../../domain/entities";

export interface IRepositories {
    createPatient: (data: PatientEntity) => Promise<PatientEntity | null>;
    createDoctor: (data: DoctorEntity) => Promise<DoctorEntity | null>;
    findPatientByEmail: (email: string) => Promise<PatientEntity | null>;
    findDoctorByEmail: (email: string) => Promise<DoctorEntity | null>;
    findPatientById: (id: string) => Promise<PatientEntity | null>;
    findDoctorById: (id: string) => Promise<DoctorEntity | null>;
    updatePatientPassword: (data: {email: string, password: string}) => Promise<PatientEntity | null>;
    updateDoctorPassword: (data: {email: string, password: string}) => Promise<DoctorEntity | null>;
    verifyPatient: (email: string) => Promise<PatientEntity | null>;
    verifyDoctor: (email: string) => Promise<DoctorEntity | null>;
}