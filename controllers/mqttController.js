import SensorData from "../models/sensorDataModel";
import mqtt from "mqtt";

mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL)


mqttClient.on('connect', () => {
  console.log("Kết nối MQTT thành công");
  mqttClient.subscribe('esp32/sensor_data');
});

mqttClient.on('message', (topic, message) => {
  const data = message.toString();
  try {
    const sensorData = JSON.parse(data);
    SensorData.insert(sensorData.temperature, sensorData.humidity, sensorData.light, (err) => {
      if (err) {
        console.error("Lỗi khi lưu dữ liệu vào MySQL: " + err.message);
      } else {
        console.log("Dữ liệu đã được lưu vào MySQL");
      }
    });
  } catch (err) {
    console.error("Lỗi khi parse dữ liệu JSON: " + err.message);
  }
});

module.exports = mqttClient;
