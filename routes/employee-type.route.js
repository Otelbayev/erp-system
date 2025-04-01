import { Router } from "express";
import employeeTypeController from "../controllers/employee-type.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// router.use(authMiddleware.allowRole(["superadmin"]));

router.post("/create", employeeTypeController.create);
router.put("/:id", employeeTypeController.update);
router.get("/", employeeTypeController.get);
router.get("/:id", employeeTypeController.id);
router.delete("/:id", employeeTypeController.delete);

export default router;
