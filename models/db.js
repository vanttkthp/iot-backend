import dotenv from "dotenv";

import mysql from "mysql";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL successfully!");
});

export default db;
