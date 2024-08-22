import express, { Response, Request, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dependencies } from "../config/dependencies";
import { routes } from "../infrastructure/routes";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Origin', 'https://my-docctor.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use("/", routes(dependencies));
// app.use("/", routes(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const errorResponse = {
    errors: [{ message: err?.message || "Something went wrong" }],
  };
  return res.status(500).json(errorResponse);
});

app.listen(PORT, () => {
  console.log(`Connected to doctor service at ${PORT}`);
});

export default app;
