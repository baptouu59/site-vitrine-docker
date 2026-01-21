const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
});

app.get("/", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur base de données" });
  }
});

app.listen(3000, () => {
  console.log("Backend lancé sur le port 3000");
});
