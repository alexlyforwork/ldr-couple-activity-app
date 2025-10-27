import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    title: {type: String},
    rating: {type: Number},
})

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  activities: {type: [ActivitySchema]}
});

export default mongoose.model("user", UserSchema);
