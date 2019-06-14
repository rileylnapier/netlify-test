const { netlifyClient } = require("../utils");

const sites = async () => {
  const sites = await netlifyClient.listSites();

  const mappedSites = sites.map(site => ({
    id: site.id,
    site_id: site.site_id,
    name: site.name,
    url: site.url,
    admin_url: site.admin_url,
    functions:
      sites.published_deploy && sites.published_deploy.available_functions
  }));

  console.log(JSON.stringify(mappedSites, null, 2));
};

const functions = async siteName => {
  const sites = await netlifyClient.listSites();

  let site = sites[0];
  if (siteName) {
    site = sites.find(site => site.name === siteName);
  }

  if (site.published_deploy) {
    console.log(
      JSON.stringify(
        {
          siteName: site.name,
          functions: site.published_deploy.available_functions
        },
        null,
        2
      )
    );
  }
};

module.exports = {
  sites,
  functions
};
