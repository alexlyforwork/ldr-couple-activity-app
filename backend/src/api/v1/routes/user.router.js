import UserController from "../controllers/user.controller.js"
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/:email", async (req, res, next) => {
  try {
    await UserController.getUserByEmail(req, res);
  } catch (error) {
    next(error);
  }
});


export default UserRouter;
