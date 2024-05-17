import { IDependencies } from "../interfaces/IDependencies";

export const listSpecialityUseCase = (dependencies: IDependencies) => {
    const { repositories: { listSpeciality } } = dependencies;

    return {
        execute: async() => {
            try {
                const specialityList = await listSpeciality();
                console.log("🚀 ~ execute:async ~ specialityList:", specialityList);

                return specialityList;
            } catch (error: any) {
                console.log("🚀 ~ execute:async ~ error:", error)
                return null;
            }
        }
    }
}