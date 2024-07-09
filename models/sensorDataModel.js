import db from "./db.js";

const SensorData = {
  insert: (temperature, humidity, light, callback) => {
    const query =
      "INSERT INTO sensor_data (temperature, humidity, light) VALUES (?, ?, ?)";
    db.query(query, [temperature, humidity, light], callback);
  },
  getAll: (callback) => {
    const query = "SELECT * FROM sensor_data ORDER BY timestamp DESC";
    db.query(query, callback);
  },
  getByTimeRange: (startTime, endTime, callback) => {
    const query = "SELECT * FROM sensor_data WHERE timestamp BETWEEN ? AND ?";
    db.query(query, [startTime, endTime], callback);
  },

};

export default SensorData;
