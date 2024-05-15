import { IDependencies } from "../interfaces/IDependencies";

export const listDoctorsUseCase = (dependencies: IDependencies) => {
    const { repositories: { listDoctor } } = dependencies;

    return {
        execute: async() => {
            try {
                const doctorList = await listDoctor();
                console.log("🚀 ~ execute:async ~ doctorList:", doctorList)
                return doctorList;
            } catch (error: any) {
                console.log("🚀 ~ execute:async ~ error:", error)
                return null
            }
        }
    }
}