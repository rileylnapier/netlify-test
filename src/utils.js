const NetlifyAPI = require("netlify");
const client = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN);

module.exports = {
  netlifyClient: client
};
