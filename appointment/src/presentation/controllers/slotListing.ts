import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const slotListingController = (dependencies: IDependencies) => {
    const { useCases: { slotListingUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;

            const slotListing = await slotListingUseCase(dependencies).execute(id);
            console.log("🚀 ~ return ~ slotListing:", slotListing)

            if (!slotListing) {
                res.status(400).json({
                  success: false,
                  data: null,
                  message: "finding doctor slots failed",
                });
              }
        
              res.status(200).json({
                succuss: true,
                data: slotListing,
                message: "doctor slots listed successfully",
              });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing doctor slots!!!",
              });
        }
    }
}