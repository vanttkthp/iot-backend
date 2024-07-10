import SensorData from "../models/sensorDataModel";
import mqtt from "mqtt";

const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL);

mqttClient.on("connect", () => {
  console.log("Connect to MySQL successfully!");
  mqttClient.subscribe("esp32/sensor_data");
});

mqttClient.on("message", (topic, message) => {
  const data = message.toString();
  try {
    const sensorData = JSON.parse(data);
    SensorData.insert(
      sensorData.temperature,
      sensorData.humidity,
      sensorData.light,
      (err) => {
        if (err) {
          console.error("Failed to save data to MySQL: " + err.message);
        } else {
          console.log("The data has been saved to MySQL");
        }
      }
    );
  } catch (err) {
    console.error("Failed to parse JSON data: " + err.message);
  }
});

export default mqttClient;
