import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import proxy from "express-http-proxy";

const app: Application = express();
const PORT: number = Number(process.env.PORT || 8080);
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/auth/api", proxy("http://localhost:4001"));
app.use("/user/api", proxy("http://localhost:4002"));
app.use("/doctor/api", proxy("http://localhost:4003"));
app.use("/appointment/api", proxy("http://localhost:4005"));
app.use("/payments/api", proxy("http://localhost:4006"));
app.use("/chat/api", proxy("http://localhost:4007"));
app.use("/notification/api", proxy("http://localhost:4008"));

app.listen(PORT, () => console.log(`Gateway running at ${PORT}`));
