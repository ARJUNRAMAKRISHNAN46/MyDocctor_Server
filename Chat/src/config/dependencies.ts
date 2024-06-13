import * as repositories from "../infrastructure/database/mongoDB/repositories";
import * as useCases from "../application/useCases";

export const dependencies: any = {
  useCases,
  repositories,
};
