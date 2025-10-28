import express from "express";
import { router as v1Router } from "./api/index.js";

const app = express();
app.use(express.json())
app.use("/api/v1", v1Router);

export default app;
