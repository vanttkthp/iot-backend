import SensorData from "../models/sensorDataModel.js";

const SensorDataController = {
  getAll: (req, res) => {
    SensorData.getAll((err, results) => {
      if (err) {
        console.error("Error fetching sensor data:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },
  getByTimeRange: (req, res) => {
    const { startTime, endTime } = req.query;
    if (!startTime || !endTime) {
      res.status(400).send("Bad Request: Missing startTime or endTime");
      return;
    }
    SensorData.getByTimeRange(startTime, endTime, (err, results) => {
      if (err) {
        console.error("Error fetching sensor data:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },
  // Other controller methods...
};

export default SensorDataController;
