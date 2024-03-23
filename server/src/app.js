import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    options: `${process.env.CORS_ORIGIN}`,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

app.use(express.urlencoded({
    extended: true,
    limit : "16kb"
}))

import { userRouter } from "./routes/user.routes.js"
import { orderRouter } from "./routes/order.routes.js"
import { productRouter } from "./routes/product.routes.js"

app.use("/users", userRouter)
app.use("/orders", orderRouter)
app.use("/products", productRouter)

export default app