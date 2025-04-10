import { Router } from "express";
import MaterialController from "../controllers/material.controller.js";

const router = Router();

router.post("/create", MaterialController.create);
router.get("/", MaterialController.get);
router.get("/:id", MaterialController.id);
router.put("/:id", MaterialController.update);
router.put("/store/:id", MaterialController.updateStore);
router.delete("/:id", MaterialController.delete);
router.delete("/store/:id", MaterialController.deleteStore);

export default router;
