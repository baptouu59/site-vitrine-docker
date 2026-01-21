const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "API backend opérationnelle",
    author: "MAES Baptiste"
  });
});

app.listen(port, () => {
  console.log(`Backend lancé sur le port ${port}`);
});
