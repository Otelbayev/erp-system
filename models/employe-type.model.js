import { Schema, model } from "mongoose";

const employeeTypeSchema = new Schema(
  {
    type: { type: String, required: true },
    work_type: { type: String, required: true, enum: ["salary", "volume"] },
  },
  { timestamps: true }
);

export default model("EmployeeType", employeeTypeSchema);
