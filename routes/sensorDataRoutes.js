import express from "express";

const router = express.Router();
import SensorDataController from "../controllers/sensorDataController.js"

router.get("/sensorData", SensorDataController.getAll);
router.get("/sensorData/search", SensorDataController.getByTimeRange);
router.get("/sensorDataPage/:pageNumber/:pageSize", SensorDataController.getByPage);

export default router;
