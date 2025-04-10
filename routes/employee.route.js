import { Router } from "express";
import upload from "../middlewares/upload.middleware.js";
import EmployeeController from "../controllers/employee.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/create",
  authMiddleware.allowRole(["superadmin", "accountant"]),
  upload,
  EmployeeController.create
);
router.get(
  "/select",
  authMiddleware.allowRole(["superadmin", "accountant"]),
  EmployeeController.select
);
router.get(
  "/",
  authMiddleware.allowRole(["superadmin", "accountant"]),
  EmployeeController.get
);
router.put(
  "/:id",
  authMiddleware.allowRole(["superadmin"]),
  upload,
  EmployeeController.update
);
router.get(
  "/:id",
  authMiddleware.allowRole(["superadmin", "accountant"]),
  EmployeeController.id
);
router.delete(
  "/:id",
  authMiddleware.allowRole(["superadmin"]),
  EmployeeController.delete
);
router.get(
  "/employee_type/:employee_type_id",
  authMiddleware.allowRole(["superadmin", "accountant"]),
  EmployeeController.getByEmployeeTypeId
);

router.put(
  "/accountant/:id",
  authMiddleware.allowRole(["accountant"]),
  upload,
  EmployeeController.updateAcc
);

export default router;
