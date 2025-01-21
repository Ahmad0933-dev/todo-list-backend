require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { color, log } = require("console-log-colors");
const todoRoutes = require("./routes/todoRoutes.js");
const component = require('./config/db.js')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Routes
app.use("/api/tasks", todoRoutes);

// Start Server
app.listen(PORT, () => {
  log(color.cyan(" ******************************************** "));
  log(color.cyan(" *******                              ******* "));
  log(color.cyan(` ******* Server started at PORT ${PORT}   ******* `));
  log(color.cyan(" *******                              ******* "));
  log(color.cyan(" ******************************************** "));
});

module.exports = app;
