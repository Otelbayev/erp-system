import { Router } from "express";
import auth from "./auth.route.js";
import user from "./user.route.js";
import employeeType from "./employee-type.route.js";
import employee from "./employee.route.js";

const router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/employeetype", employeeType);
router.use("/employee", employee);

export default router;
