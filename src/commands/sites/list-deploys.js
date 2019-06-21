const { netlifyClient, pick, log } = require("../../utils");

const formatSiteDeploys = siteDeploys =>
  siteDeploys.map(siteDeploy =>
    pick(siteDeploy, [
      "id",
      "site_id",
      "name",
      "url",
      "deploy_url",
      "branch",
      "created_at",
      "error_message",
      "commit_url",
      "title",
      "committer"
    ])
  );

const listDeploys = async ({ siteId }) => {
  log.info("Listing Netlify Site Deploys");
  let siteDeploys;

  if (siteId) {
    log.info(`Filtering by Site Id: ${siteId}`);
    siteDeploys = formatSiteDeploys(
      await netlifyClient.listSiteDeploys({
        site_id: siteId
      })
    );
  } else {
    sites = await netlifyClient.listSites();
    siteDeploys = await Promise.all(
      sites.map(async site => {
        const siteDeploys = await netlifyClient.listSiteDeploys({
          site_id: site.id
        });

        return {
          site_id: site.id,
          name: site.name,
          deploys: formatSiteDeploys(siteDeploys)
        };
      })
    );
  }

  log.success(siteDeploys);
  return siteDeploys;
};

module.exports = listDeploys;
