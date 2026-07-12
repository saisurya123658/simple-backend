const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/summarize", require("./routes/summarize"));

app.get("/", (req, res) => {
  res.json({
    message: "AI Backend Running"
  });
});

module.exports = app;
