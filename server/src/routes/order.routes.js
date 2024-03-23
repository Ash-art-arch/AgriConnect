import { Router } from "express";
import { createOrder, deleteOrder, orderUpdate } from "../controllers/order.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";

const orderRouter = Router()

orderRouter.use(verifyJwt) 
orderRouter.route("/create-order").post(createOrder)
orderRouter.route("/:orderId").put(orderUpdate).delete(deleteOrder)


export { orderRouter }