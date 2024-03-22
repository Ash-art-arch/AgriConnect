import { Router } from "express";
import { createOrder, deleteOrder, orderUpdate } from "../controllers/order.controller.js";

const orderRouter = Router()

orderRouter.route("/createOrder").post(createOrder)
orderRouter.route("/:orderId").put(orderUpdate)
orderRouter.route("/:orderId").delete(deleteOrder)

export { orderRouter }