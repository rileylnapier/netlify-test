const chalk = require("chalk");

const logMessage = (message, color) => {
  message =
    typeof message === "object" ? JSON.stringify(message, null, 2) : message;
  console.log(chalk[color](`\n${message}`));
};

const success = message => logMessage(message, "green");
const info = message => logMessage(message, "yellow");
const warn = message => logMessage(message, "orange");
const error = message => {
  logMessage(message, "red");
  throw new Error(message);
};

module.exports = {
  success,
  info,
  warn,
  error
};
