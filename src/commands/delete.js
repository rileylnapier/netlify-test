const { netlifyClient } = require("../utils");

const site = async siteId => {
  if (!siteId) {
    throw new Error("missing siteId");
  }

  await netlifyClient.deleteSite({
    site_id: siteId
  });

  console.log("site deleted!!");
};

module.exports = {
  site
};
