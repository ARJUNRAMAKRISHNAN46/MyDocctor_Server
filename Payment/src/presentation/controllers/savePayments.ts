import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const savePaymentController = (dependencies: IDependencies) => {
  const {
    useCases: { savePaymentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    // const token: string = req.cookies.user_jwt;
    // const decodedValue: any = verifyToken(token);
    // data.userId = decodedValue._id;
    console.log("🚀 ~ file: savePayment.ts:11 ~ return ~ data:", data);
    try {
      const response = await savePaymentUseCase(dependencies).execute(data);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      next(error);
    }
  };
};
