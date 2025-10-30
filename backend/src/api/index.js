import express from "express";
import UserRouter from "./v1/routes/user.router.js";
import CoupleRouter from "./v1/routes/couple.router.js";

const router = express.Router();

router.use("/user", UserRouter);
router.use("/couple", CoupleRouter);

export { router };
