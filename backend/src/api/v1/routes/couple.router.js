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

CoupleRouter.get("/:code", async (req,res,next) => {
  try {
    await CoupleController.getCoupleByCode(req, res);
  } catch (error) {
    next(error);
  }
})

CoupleRouter.patch("/user2", async(req,res,next)=>{
  try {
    await CoupleController.addUser2ToCoupleByCode(req,res);
  } catch (error) {
    next(error)
  }
})

export default CoupleRouter;
