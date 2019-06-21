# Riley CLI

Riley CLI for Netlify API

## Development / Testing

run `npm link` in root directory to get `riley-cli` as a CLI command

## Getting Started

Make sure to set your env NETLIFY_ACCESS_TOKEN in the root directory .env
Generate an Access Token here: https://app.netlify.com/user/applications/personal

```
echo 'NETLIFY_ACCESS_TOKEN={{YOUR_ACCESS_TOKEN}}' >> .env
```

The CLI is broken into smaller sections called `commands` or `functional areas`. The following functional areas are supported: `sites`, `functions`.

Other functional areas to be supported: `builds`, `deploys`, `hooks`, etc...

> These are 1:1 mapping with the Netlify Open Api.

### Sites CLI

- `riley-cli sites <command>`
- `riley-cli sites --help`

#### List Sites

Available Commands: `list`, `list-deploys`, `delete`

```
Options:
  -i, --site-id <id>  Filter By `Site Id`
  -h, --help          output usage information

Examples:

      # List all sites
      $ riley-cli sites

      # List deploys for all sites
      $ riley-cli sites list-deploys

      # List deploys for a specific site
      $ riley-cli sites list-deploys -i {{site_id}}
      $ riley-cli sites list-deploys --site-id {{site_id}}

      # Delete a site
      $ riley-cli sites delete -i {{site_id}}
      $ riley-cli sites delete --site-id {{site_id}}
```

### Functions CLI

Available Commands: `list`

```
Options:
  -i, --site-id <id>      Filter By `Site Id`
  -n, --site-name <name>  Filter By `Site Name`
  -h, --help              output usage information

Examples:

      # List functions for all sites
      $ riley-cli functions list

      # List functions by site_id
      $ riley-cli functions list -i {{site_id}}
      $ riley-cli functions list --site-id {{site_id}}

      # List functions by site_name
      $ riley-cli functions list -n {{site_name}}
      $ riley-cli functions list --site-name {{site_name}}
```
