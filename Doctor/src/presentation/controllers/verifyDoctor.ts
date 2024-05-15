import { verifyDoctorProducer } from "../../infrastructure/kafka/producers/verifyDoctorProducer";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const verifyDoctorController = (dependencies: IDependencies) => {
  const {
    useCases: { verifyUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = String(req.query.email);
      console.log("🚀 ~ return ~ email:", email);

      const verified = await verifyUserUseCase(dependencies).execute(email);
      console.log("🚀 ~ return ~ verified:", verified);

      if (!verified) {
        res.status(400).json({
          success: false,
          message: "doctor verification failed",
        });
      }

      res.status(200).json({
        succuss: true,
        message: "doctor verified successfully",
      });

      verifyDoctorProducer(verified);
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "error while doctor verification",
      });
    }
  };
};
