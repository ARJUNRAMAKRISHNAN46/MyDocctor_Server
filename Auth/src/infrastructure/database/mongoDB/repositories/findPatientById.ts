import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const findPatientById = async (id: string): Promise<PatientEntity | null> => {
    try {
        const existPatient = await Patient.findById(id);

        if(!existPatient) {
            throw new Error('Patient does not exist');
        }

        return existPatient;

    } catch (error: any) {
        throw new Error(error?.message)
    }
}