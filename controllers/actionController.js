import Action from "../models/actionModel.js";

const ActionsController = {
  controlLed: (req, res) => {
    const { ledId, action } = req.body;
    if (ledId === "led1" || ledId === "led2") {
      mqttClient.publish(`control/${ledId}`, action);
      Action.insert(ledId, action, (err) => {
        if (err) {
          console.error("Error:", err);
          res.status(500).json({ success: false });
        } else {
          res.json({ success: true });
        }
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid LED ID" });
    }
  },
  countActions: (req, res) => {
    Action.countActions((err, counts) => {
      if (err) {
        console.error("Error counting actions:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      } else {
        res.json(counts);
      }
    });
  },

};

export default ActionsController;
