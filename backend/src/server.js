import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
