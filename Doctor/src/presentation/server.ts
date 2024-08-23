import express, { Response, Request, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { dependencies } from "../config/dependencies";
import { routes } from "../infrastructure/routes";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173', 'https://my-docctor.vercel.app'];

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));


// app.use("/", routes(dependencies));
app.use("/", routes(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const errorResponse = {
    errors: [{ message: err?.message || "Something went wrong " }],
  };
  return res.status(500).json(errorResponse);
});

app.listen(PORT, () => {
  console.log(`Connected to doctor service at ${PORT}`);
});

export default app;
