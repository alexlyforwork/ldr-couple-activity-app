import express from "express";
import UserRouter from "./v1/routes/user.router.js";

const router = express.Router();

router.use("/user", UserRouter);

export { router };
