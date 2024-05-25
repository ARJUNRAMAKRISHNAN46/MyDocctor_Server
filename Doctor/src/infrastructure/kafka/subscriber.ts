import updateUserConsumer from "./consumers/updateUserConsumer";
import userCreatedConsumer from "./consumers/userCreatedConsumer";

export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer,
        userProfileUpdate: updateUserConsumer,
    }
}