import express from "express";

const router = express.Router();

import actionRoutes from "./actionRoutes.js";
import sensorDataRoutes from "./sensorDataRoutes.js";

router.use("/api", actionRoutes);
router.use("/api", sensorDataRoutes);

export default router;
