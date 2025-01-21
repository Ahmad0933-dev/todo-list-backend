const mysql = require("mysql");
const { color, log } = require("console-log-colors");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "todo_list",
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    log(color.red(" ******************************************** "));
    log(color.red(" *******                              ******* "));
    log(color.red(" *******   Failed to connect to DB    ******* "));
    log(color.red(" *******                              ******* "));
    log(color.red(" ******************************************** "));
    console.error(error);
    process.exit(1); // Exit process on DB connection error
  } else {
    log(color.green(" ******************************************** "));
    log(color.green(" *******                              ******* "));
    log(color.green(" ******* MySQL Connected Successfully ******* "));
    log(color.green(" *******                              ******* "));
    log(color.green(" ******************************************** "));
  }
});

module.exports = connection;
