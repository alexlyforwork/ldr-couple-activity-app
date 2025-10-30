import CoupleController from "../controllers/couple.controller.js";
import express from "express";

const CoupleRouter = express.Router();

CoupleRouter.post("/new", async (req, res, next) => {
  try {
    await CoupleController.createCouple(req, res);
  } catch (error) {
    next(error);
  }
});

export default CoupleRouter;
