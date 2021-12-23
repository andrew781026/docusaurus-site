// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YSDT 重構案 - 前端文件',
  tagline: '說明重構案內部存在的元件',
  url: 'https://andrew781026.github.io',
  baseUrl: '/docusaurus-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YSDT', // Usually your GitHub org/user name.
  projectName: 'YSDT-frontend-docs', // Usually your repo name.

  stylesheets: [
    // String format.
    'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/andrew781026/docusaurus-site/edit/main/my-website/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'YSDT 重構案 - 前端元件',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'ysdt-component/index',
          position: 'left',
          label: '範例',
        },
        {
          href: 'https://github.com/andrew781026/docusaurus-site',
          label: 'GitHub',
          position: 'right',
          className: 'mr-4',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} YSDT Scm3 Project, Inc. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
