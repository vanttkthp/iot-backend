import db from "./db.js";

const Action = {
  insert: (ledName, action, callback) => {
    const query = "INSERT INTO action (led_name, action) VALUES (?, ?)";
    db.query(query, [ledName, action], callback);
  },
  countActions: (callback) => {
    const countOnQuery =
      "SELECT COUNT(*) AS count_on FROM action WHERE action = 'on'";
    const countOffQuery =
      "SELECT COUNT(*) AS count_off FROM action WHERE action = 'off'";

    db.query(countOnQuery, (errOn, resultOn) => {
      if (errOn) return callback(errOn);
      db.query(countOffQuery, (errOff, resultOff) => {
        if (errOff) return callback(errOff);
        const countOn = resultOn[0].count_on || 0;
        const countOff = resultOff[0].count_off || 0;
        callback(null, { countOn, countOff });
      });
    });
  },
  getByPage: (pageNumber, pageSize, callback) => {
    const offset = (pageNumber - 1) * pageSize;
    const query =
      "SELECT * FROM action ORDER BY timestamp DESC LIMIT ? OFFSET ?";
    db.query(query, [parseInt(pageSize), offset], callback);
  },

};

export default Action;
