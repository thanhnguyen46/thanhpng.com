// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thanh Nguyen',
  tagline: 'Department of Computer & Information Sciences',
  favicon: 'img/temple_logo.svg',

  // Set the production url of your site here
  url: 'https://thanhpng.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thanhnguyen46', // Usually your GitHub org/user name.
  projectName: 'thanhpng.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://social.cards/api/img/6sikhax1sv',
      navbar: {
        title: 'Thanh Nguyen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/temple_logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Communication',
            items: [
              {
                label: 'Email Me',
                href: 'mailto:tul20076@temple.edu',
              },
              {
                label: 'Calendly',
                href: 'https://calendly.com/thanh-phuoc-nguyen/',
              },
            ],
          },
          {
            title: 'Suggested Tools',
            items: [
              {
                label: 'IntelliJ IDEA',
                href: 'https://www.jetbrains.com/help/idea/installation-guide.html',
              },
              {
                label: 'CLion',
                href: 'https://www.jetbrains.com/help/clion/installation-guide.html',
              },
              {
                label: 'Visual Studio Code',
                href: 'https://code.visualstudio.com/docs/setup/setup-overview',
              },
              {
                label: 'Jira',
                href: 'https://temple-cis-projects-in-cs.atlassian.net/',
              },
            ],
          },
          {
            title: 'Other Tools',
            items: [
              {
                label: 'Remote SSH - GPU Server',
                to:'/gpu-server',
              },
              {
                label: 'Docusaurus Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Docusaurus Guide',
                to: 'https://docusaurus.io/docs/category/guides',
              },
            ],
          },
        ],
        logo: {
          alt: 'My Site Logo',
          src: 'img/temple_logo.svg',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Thanh Phuoc Nguyen. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
