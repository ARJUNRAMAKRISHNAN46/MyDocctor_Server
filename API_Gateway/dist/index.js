"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT || 8080);
const corsOptions = {
    origin: "https://my-docctor.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/auth/api", (0, express_http_proxy_1.default)("https://mydocctor-server.onrender.com"));
app.use("/chat/api", (0, express_http_proxy_1.default)("https://mydocctor-server-1.onrender.com"));
app.use("/doctor/api", (0, express_http_proxy_1.default)("https://mydocctor-server-2.onrender.com"));
app.use("/payments/api", (0, express_http_proxy_1.default)("https://mydocctor-server-3.onrender.com"));
app.use("/user/api", (0, express_http_proxy_1.default)("https://mydocctor-server-4.onrender.com"));
app.use("/appointment/api", (0, express_http_proxy_1.default)("https://mydocctor-server-5.onrender.com"));
app.use("/notification/api", (0, express_http_proxy_1.default)(""));
// app.use("/auth/api", proxy("http://localhost:4001"));
// app.use("/user/api", proxy("http://localhost:4002"));
// app.use("/doctor/api", proxy("http://localhost:4003"));
// app.use("/appointment/api", proxy("http://localhost:4005"));
// app.use("/payments/api", proxy("http://localhost:4006"));
// app.use("/chat/api", proxy("http://localhost:4007"));
// app.use("/notification/api", proxy("http://localhost:4008"));
app.listen(PORT, () => console.log(`Gateway running at ${PORT}`));
