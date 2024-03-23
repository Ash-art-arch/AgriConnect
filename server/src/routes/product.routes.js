import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt.js";
import { addProduct, deleteProduct, modifyProduct } from "../controllers/product.controller.js";

const productRouter = Router()

productRouter.use(verifyJwt)
productRouter.route("/add-product").post(addProduct)
productRouter.route("/:productId").put(modifyProduct).delete(deleteProduct)
export {productRouter}