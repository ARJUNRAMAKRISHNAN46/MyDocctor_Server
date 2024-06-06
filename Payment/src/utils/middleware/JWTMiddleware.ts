import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

interface UserPayload {
  _id: string;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const JWTMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { access_token, refresh_token } = req.cookies;
    console.log("🚀 ~ refresh_token:", refresh_token)
    console.log("🚀 ~ access_token:", access_token)
    console.log("🚀 ~ access_token:", req.cookies.refresh_token)

    if (!access_token || !refresh_token) {
      console.log("faileddddddddddddddddddddddddd");

      return res.status(404).json({
        success: false,
        message: "no user found",
      });
    }
    console.log("herrrrrrrrrrr");

    next();
  } catch (error) {
    console.error("Error in JWT middleware:", error);
    next(error);
  }
};
