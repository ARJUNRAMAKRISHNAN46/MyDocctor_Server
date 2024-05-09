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

app.use("/auth", proxy("http://localhost:4001"));
app.use("/user", proxy("http://localhost:4002"));
app.use("/doctor", proxy("http://localhost:4003"));
app.use("/admin", proxy("http://localhost:4004"));
app.use("/appointment", proxy("http://localhost:4005"));
app.use("/payments", proxy("http://localhost:4006"));

app.listen(PORT, () => console.log(`Gateway running at ${PORT}`));
