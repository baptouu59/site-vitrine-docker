const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());

const pool = new Pool({
  host: "db",
  user: "admin",
  password: "admin",
  database: "vitrine",
  port: 5432,
});

app.get("/", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erreur base de données" });
  }
});

app.listen(3000, () => {
  console.log("Backend lancé sur le port 3000");
});
