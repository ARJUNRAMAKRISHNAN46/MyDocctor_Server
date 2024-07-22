import {
  IListAllPaymentsUseCase,
  IListPaymentsUseCase,
  ISavePaymentUseCase,
  IFindPaymentByIdUseCase,
} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  savePaymentUseCase: (dependencies: IDependencies) => ISavePaymentUseCase;
  listPaymentsUseCase: (dependencies: IDependencies) => IListPaymentsUseCase;
  listAllPaymentsUseCase: (dependencies: IDependencies) => IListAllPaymentsUseCase;
  findPaymentByIdUseCase: (dependencies: IDependencies) => IFindPaymentByIdUseCase;
}
