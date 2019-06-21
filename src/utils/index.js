const NetlifyAPI = require("netlify");
const log = require("./log");

const client = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN);

const pick = (obj, keys) =>
  keys
    .map(k => (k in obj ? { [k]: obj[k] } : {}))
    .reduce((res, o) => Object.assign(res, o), {});

module.exports = {
  log,
  pick,
  netlifyClient: client
};
