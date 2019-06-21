const { netlifyClient, log } = require("../utils");

const formatFunctions = functions =>
  functions.map(func => ({
    id: func.id,
    name: func.n,
    created: func.c
  }));

const list = async ({ siteId }) => {
  log.info(`Listing Netlify Functions`);
  let site, sites;

  if (siteId) {
    log.info(`Filtering by Site Id: ${siteId}`);
    site = await netlifyClient.getSite({
      site_id: siteId
    });
  } else {
    sites = await netlifyClient.listSites();
  }

  if (!site && (!sites || sites.length === 0)) {
    return log.error("No Sites Found.");
  }

  if (site) {
    const result = {
      site_id: site.id,
      name: site.name,
      functions: formatFunctions(site.published_deploy.available_functions)
    };

    log.success(result);
    return result;
  }

  log.info(`Listing Netlify Functions for All Sites`);
  const mappedSites = sites.map(site => ({
    site_id: site.id,
    name: site.name,
    functions: formatFunctions(site.published_deploy.available_functions)
  }));

  log.success(mappedSites);
  return mappedSites;
};

module.exports = {
  list
};
