import express from "express";

const router = express.Router();
import ActionsController from "../controllers/actionController.js";

router.post("/controlLed", ActionsController.controlLed);
router.get("/countActions", ActionsController.countActions);

export default router;
