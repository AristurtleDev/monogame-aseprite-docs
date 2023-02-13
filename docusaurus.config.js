// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MonoGame.Aseprite',
  tagline: 'Import Aseprite files directly into MonoGame.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://monogameaseprite.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aristurtledev', // Usually your GitHub org/user name.
  projectName: 'monogame-aseprite-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/banner.png',
      navbar: {
        title: 'MonoGame.Aseprite',
        logo: {
          alt: 'MonoGame.Aseprite Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction-maintenance',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AristurtleDev/monogame-aseprite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mastodon',
                href: 'https://mastodon.gamedev.place/@aristurtle',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aristurtledev',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aristurtledev/monogame-aseprite',
              },
            ],
          },
        ],
        logo: {
          alt: "MonoGame Aseprite Logo",
          src: "img/banner.png",
          href: "/"
        },
        copyright: `Copyright © ${new Date().getFullYear()} Christopher Whitley.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp']
      },
    }),
  
  scripts: [
    {
      src: '/js/matomo.js',
      async: false
    }
  ]
};

module.exports = config;
