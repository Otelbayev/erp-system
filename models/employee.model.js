import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    patronymic: { type: String, required: true },
    image: { type: String },
    start_date: { type: Date, required: true },
    employee_type_id: {
      type: Schema.Types.ObjectId,
      ref: "EmployeeType",
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Employee", employeeSchema);
