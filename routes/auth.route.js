import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/token.middleware.js";

const router = Router();

router.post("/login", authController.login);
router.get("/check-token", verifyToken, authController.checkToken);

export default router;
