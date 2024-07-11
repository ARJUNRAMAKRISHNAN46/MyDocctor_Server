import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import stripe from "stripe";

export const createCheckoutSessionController = (
  dependencies: IDependencies
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stripeInstance = new stripe(String(process.env.STRIPE_SECRET));
      const { doctor_id, user_id, date, slot, fees } = req.body;
      console.log(doctor_id, user_id, date, slot);

      const lineItems = [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: "Total Amount",
            },
            unit_amount: Math.floor(fees * 100),
          },
          quantity: 1,
        },
      ];

      const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://mydocctor.online/paymentSuccess",
        cancel_url: "http://futstore.me",
      });
      res
        .status(200)
        .json({ success: true, id: session.id, message: "payment response" });
      const paymentIntent = await stripeInstance.paymentIntents.retrieve(
        session.id
      );
      console.log(
        "🚀 ~ file: createCheckoutSession.ts:41 ~ return ~ paymentIntent.:",
        paymentIntent
      );
    } catch (error: any) {
      next(error);
    }
  };
};
