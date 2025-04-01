import { Router } from "express";
import upload from "../middlewares/upload.middleware.js";
import EmployeeController from "../controllers/employee.controller.js";

const router = Router();

router.post("/create", upload, EmployeeController.create);
router.get("/select", EmployeeController.select);
router.get("/", EmployeeController.get);
router.put("/:id", upload, EmployeeController.update);
router.get("/:id", EmployeeController.id);
router.delete("/:id", EmployeeController.delete);
router.get(
  "/employee_type/:employee_type_id",
  EmployeeController.getByEmployeeTypeId
);

export default router;
