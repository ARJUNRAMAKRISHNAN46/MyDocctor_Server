import { Request, Response, NextFunction } from "express";

export const getPrescriptionsController = (dependencies: any) => {
  const {
    useCases: { getPrescriptionsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recieverId = req.params.id;
      const data = await getPrescriptionsUseCase(dependencies).execute(
        recieverId
      );
      console.log("🚀 ~ return ~ data:", data);

      if (!data) {
        res.status(400).json({
          success: false,
          message: "prescription listed failed",
          data: [],
        });
      }

      res.status(200).json({
        success: true,
        message: "prescription listed successfully",
        data: data,
      });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
};
