import { Schema, model } from "mongoose";

const roles = [
  "superadmin",
  "admin",
  "accountant",
  "storekeeper",
  "tsex-manager",
  "resultkeeper",
];

const userSchema = new Schema(
  {
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: roles },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model("User", userSchema);
