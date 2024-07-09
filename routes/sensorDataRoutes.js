import express from "express";

const router = express.Router();
import SensorDataController from "../controllers/sensorDataController.js"

router.get("/sensorData", SensorDataController.getAll);
router.get("/sensorData/search", SensorDataController.getByTimeRange);
// Other routes...

export default router;
