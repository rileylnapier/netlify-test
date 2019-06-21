const list = require("./list");
const getSite = require("./get-site");
const listDeploys = require("./list-deploys");
const deleteSite = require("./delete-site");

module.exports = {
  list,
  listDeploys,
  get: getSite,
  delete: deleteSite
};
