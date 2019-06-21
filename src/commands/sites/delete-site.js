const { netlifyClient, log } = require("../../utils");

const deleteSite = async ({ siteId }) => {
  log.info(`Deleting Netlify Site: ${siteId}`);

  await netlifyClient.deleteSite({
    site_id: siteId
  });

  log.success("Site Deleted");
};

module.exports = deleteSite;
