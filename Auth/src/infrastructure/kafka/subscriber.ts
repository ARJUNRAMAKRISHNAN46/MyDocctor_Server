import blockUserConsumer from "./consumers/blockUserConsumer";
import userUpdateConsumer from "./consumers/userUpdateConsumer";
import verifyDoctorConsumer from "./consumers/verifyDoctorConsumer";

export const createSubscriber = () => {
    
    return {
        doctorUpdated: userUpdateConsumer,
        verifyDoctor: verifyDoctorConsumer,
        blockUser: blockUserConsumer,
    }
}