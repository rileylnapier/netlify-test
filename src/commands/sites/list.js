const { netlifyClient, pick, log } = require("../../utils");

const getSite = async ({ siteId }) => {
  log.info("Listing Netlify Sites");
  const site = await netlifyClient.getSite({
    site_id: siteId
  });

  log.success(
    pick(site, ["id", "name", "url", "admin_url", "created_at", "updated_at"])
  );
};

const list = async () => {
  log.info("Listing Netlify Sites");
  const sites = await netlifyClient.listSites();

  const mappedSites = sites.map(site => ({
    ...pick(site, [
      "id",
      "name",
      "url",
      "admin_url",
      "created_at",
      "updated_at"
    ]),
    functions:
      sites.published_deploy && sites.published_deploy.available_functions
  }));

  log.success(mappedSites);
  return mappedSites;
};

module.exports = list;
