import { IRepositories } from "./IRepositories";
import { IUseCases } from "./../interfaces/IUseCase";

export interface IDependencies {
  repositories: IRepositories;
  useCases: IUseCases;
}
