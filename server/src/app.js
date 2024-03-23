import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.routes.js";
import { orderRouter } from "./routes/order.routes.js";

const app = express();

// Dynamic CORS origin from environment variable
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(express.urlencoded({
    extended: true,
    limit : "16kb"
}))


import { productRouter } from "./routes/product.routes.js"

app.use("/users", userRouter)
app.use("/orders", orderRouter)
app.use("/products", productRouter)

export default app

