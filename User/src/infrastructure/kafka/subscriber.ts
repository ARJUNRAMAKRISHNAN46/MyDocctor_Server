import blockUserConsumer from "./consumers/blockUserConsumer";
import userCreatedConsumer from "./consumers/userCreatedConsumer";

export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer,
        blockUser: blockUserConsumer,
        updatedBooking: () => {console.log("no feature");},
        verifyDoctor: () => {console.log("no feature");}
    }
}