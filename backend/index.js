const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "API backend opérationnelle",
    author: "MAES Baptiste"
  });
});

app.listen(port, () => {
  console.log(`Backend lancé sur le port ${port}`);
});
