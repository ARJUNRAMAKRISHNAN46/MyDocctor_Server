import { IDependencies } from "../interfaces/IDependencies";

export const blockUserUseCase = (dependencies: IDependencies) => {
    const { repositories: { blockUser } } = dependencies;

    return {
        execute: async(id: string) => {
            try {
                console.log("🚀 ~ execute:async ~ id:", id)
                const blocked = await blockUser(id)
                console.log("🚀 ~ execute:async ~ blocked:", blocked);

                return blocked;
            } catch (error: any) {
                console.error(error);
                return null;
            }
        }
    }
}