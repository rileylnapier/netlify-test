require("dotenv").config();

/*
1.  make a cli
2.  use netlify api to list sites
3.  "" list functions
4.  delete site


documentation:

cli list {{sites | function [siteName]}}
cli delete site {{siteId}}

*/

const commands = require("./commands");
const [a, b, func, method, option] = process.argv;

const cmdFunction = commands[func];
if (!cmdFunction) {
  return console.log("bad command");
}

cmdFunction[method](option);
