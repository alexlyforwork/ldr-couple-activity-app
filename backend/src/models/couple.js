import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const CoupleSchema = new mongoose.Schema({
  user1_id: { type: ObjectId, required: true, ref: "user" },
  user2_id: { type: ObjectId, ref: "user", default: null },
  code: { type: Number, required: true, unique: true },
  last_session_id: { type: ObjectId, default: null },
  next_session_id: { type: ObjectId, default: null },
  next_deadline: { type: Date, default: null },
});

export default mongoose.model("couple", CoupleSchema);
