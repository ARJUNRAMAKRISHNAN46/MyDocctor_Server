import { IDependencies } from "@/application/interfaces/IDependencies";
import { loginController, } from "./login";
import { signupController } from "./signup";
import { logoutController } from "./logout";
import { isExistController } from "./isExist";

export const controllers =(dependencies: IDependencies) => {
    return {
        login: loginController(dependencies),
        signup: signupController(dependencies),
        logout: logoutController(dependencies),
        isExist: isExistController(dependencies)
    }
}