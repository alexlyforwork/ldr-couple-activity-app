import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const CoupleSchema = new mongoose.Schema({
    user1_id: {type: ObjectId, required: true, ref: "user"},
    user2_id: {type: ObjectId, ref: "user"},
    code: {type: Number, required: true, unique: true},
    last_session: {type: ObjectId},
    next_session: {type: ObjectId},
    next_deadline: {type: Date}
})

export default mongoose.model("couple",CoupleSchema);