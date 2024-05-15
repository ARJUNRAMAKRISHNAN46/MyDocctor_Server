import { IDependencies } from "../interfaces/IDependencies";

export const listUserUseCase = (dependencies: IDependencies) => {
    const { repositories: { listUser } } = dependencies;

    return {
        execute: async() => {
            try {
                const userList = await listUser();
                console.log("🚀 ~ execute:async ~ userList:", userList);

                return userList;
            } catch (error :any) {
                console.log("🚀 ~ execute:async ~ error:", error)
                return null;
            }
        }
    }
}