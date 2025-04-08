import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
