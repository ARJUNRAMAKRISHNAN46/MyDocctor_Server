import { IDependencies } from "../interfaces/IDependencies";

export const userAppointmentUseCase = (dependencies: IDependencies) => {
    const { repositories: { userAppointment } } = dependencies;

    return {
        execute: async(userId: string) => {
            try {
                const userAppointments = await userAppointment(userId);

                return userAppointments;
            } catch (error: any) {
                return null;
            }
        }
    }
}