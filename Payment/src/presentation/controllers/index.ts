import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCheckoutSessionController } from "./createCheckoutSession";
import { savePaymentController } from "./savePayments";
import { listPaymentsController } from "./listPayments";
import { listAllPaymentsController } from "./listAllPayments";

export const controllers = (dependencies: IDependencies) => {
  return {
    createCheckoutSession: createCheckoutSessionController(dependencies),
    savePayment: savePaymentController(dependencies),
    listPayments: listPaymentsController(dependencies),
    listAllPayments: listAllPaymentsController(dependencies),
  };
};
