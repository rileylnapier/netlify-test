# netlify-test

## commands

Getting Started:

.env file with NETLIFY_ACCESS_TOKEN === your personal access token

### list sites

`npm start -- list sites`

example output

```
[
  {
    "id": "SITEID",
    "site_id": "SITEID",
    "name": "blu-muse",
    "url": "http://blu-muse.netlify.com",
    "admin_url": "https://app.netlify.com/sites/blu-muse"
  }
]
```

### list functions

`npm start -- list functions [siteName]`

```
{
  "siteName": "blu-muse",
  "functions": [
    {
      "n": "hello-world",
      "d": "",
      "id": "",
      "a": "",
      "c": "2019-06-14T14:45:13.208Z",
      "r": "js",
      "s": 317
    }
  ]
}

```

### delete site

`npm start -- delete site [siteId]`
