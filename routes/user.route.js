import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post(
  "/create",
  authMiddleware.allowRole(["superadmin"]),
  userController.createUser
);
router.put(
  "/:id",
  authMiddleware.allowRole(["superadmin"]),
  userController.updateUserById
);
router.put(
  "/updateprofile",
  authMiddleware.authenticateUser,
  userController.updateProfile
);
router.get(
  "/getall",
  authMiddleware.allowRole(["superadmin"]),
  userController.getUsers
);
router.get(
  "/:id",
  authMiddleware.allowRole(["superadmin"]),
  userController.getUserById
);
router.delete(
  "/:id",
  authMiddleware.allowRole(["superadmin"]),
  userController.deleteUser
);

export default router;
