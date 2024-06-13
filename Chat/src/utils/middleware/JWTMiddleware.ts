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
    console.log(req.cookies, "==================================>");
    

    if (!access_token && !refresh_token) {
      res.status(404).json({
        success: false,
        message: "no user found"
      })
    }

    return next();
  } catch (error) {
    console.error("Error in JWT middleware:", error);
    next(error);
  }
};
