import { Router } from "express";
import { loginUser, logoutUser, regenAccessToken, registerUser } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";

const userRouter = Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)

//secured routes
userRouter.route("/logout").post(verifyJwt ,logoutUser)
userRouter.route("/refresh-tokens").post(regenAccessToken)

export { userRouter }