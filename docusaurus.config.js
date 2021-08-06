/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'air:bit',
  tagline: 'Skolelaboratoriet ved UiT',
  url: 'https://erlingdevdev.github.io',
  baseUrl: '/airbit_docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'erlingdevdev', // Usually your GitHub org/user name.
  projectName: 'airbit_docs', // Usually your repo name.
	trailingSlash: false,
  themeConfig: {
    navbar: {
			title: 'air:bit',
      items: [
        {
          to: 'docs/Home',
          activeBasePath: 'docs',
          label: 'Guider',
          position: 'right',
        },
        {to: 'blog', label: 'Nyheter', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kontakt',
          items: [
            {
              label: 'Skolelaboratoriet',
              href: 'https://uit.no/skolelab',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/skolelab',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
      },
    ],
  ],
};
