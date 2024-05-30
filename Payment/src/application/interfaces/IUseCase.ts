import { ISavePaymentUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  savePaymentUseCase: (dependencies: IDependencies) => ISavePaymentUseCase;
}
