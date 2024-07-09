import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const savePaymentController = (dependencies: IDependencies) => {
  const {
    useCases: { savePaymentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      console.log("🚀 ~ file: savePayment.ts:11 ~ return ~ data: ", data);
      const response = await savePaymentUseCase(dependencies).execute(data);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      next(error);
    }
  };
};
