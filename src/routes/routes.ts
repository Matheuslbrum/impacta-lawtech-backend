import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);
router.get("/get", userController.get);

export default router;
