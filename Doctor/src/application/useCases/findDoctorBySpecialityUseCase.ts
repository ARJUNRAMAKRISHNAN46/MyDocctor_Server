import { IDependencies } from "../interfaces/IDependencies";

export const findDoctorBySpecialityUseCase = (dependencies: IDependencies) => {
    const { repositories: { findDoctorBySpeciality } } = dependencies;

    return {
        execute: async(speciality: string) => {
            try {
                const doctorList = await findDoctorBySpeciality(speciality);
                console.log("🚀 ~ execute:async ~ doctorList:", doctorList);

                return doctorList;
            } catch (error: any) {
                console.log("🚀 ~ execute:async ~ error:", error)
                return null;
            }
        }
    }
}