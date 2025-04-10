import { Schema, model } from "mongoose";

const materialSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["kg", "sht", "m2"] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model("Material", materialSchema);
