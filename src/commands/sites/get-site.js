const { netlifyClient, pick, log } = require("../../utils");

const getSite = async ({ siteId }) => {
  log.info("Listing Netlify Sites");
  const site = await netlifyClient.getSite({
    site_id: siteId
  });

  log.success(
    pick(site, ["id", "name", "url", "admin_url", "created_at", "updated_at"])
  );

  return site;
};

module.exports = getSite;
