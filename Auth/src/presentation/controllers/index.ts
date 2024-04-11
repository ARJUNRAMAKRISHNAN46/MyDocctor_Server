import { IDependencies } from "@/application/interfaces/IDependencies";
import { patientLoginController } from "./PatientLogin";
import { doctorLoginController } from "./doctorLogin";

export const controllers =(dependencies: IDependencies) => {
    return {
        patientLogin: patientLoginController(dependencies),
        doctorLogin: doctorLoginController(dependencies),
    }
}