export default {
  "title": "air:bit",
  "tagline": "Skolelaboratoriet ved UiT",
  "url": "https://erlingdevdev.github.io",
  "baseUrl": "/airbit_docs/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "erlingdevdev",
  "projectName": "airbit_docs",
  "trailingSlash": false,
  "themeConfig": {
    "navbar": {
      "title": "air:bit",
      "items": [
        {
          "to": "docs/Home",
          "activeBasePath": "docs",
          "label": "Guider",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Nyheter",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Kontakt",
          "items": [
            {
              "label": "Skolelaboratoriet",
              "href": "https://uit.no/skolelab"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/skolelab"
            }
          ]
        }
      ]
    }
  },
  "presets": [
    [
      "@docusaurus/preset-bootstrap",
      {
        "docs": {
          "sidebarPath": "/Users/dev/code/sommerjobb/docs_airbit2/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};