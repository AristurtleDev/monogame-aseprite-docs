// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MonoGame.Aseprite',
  tagline: 'Import Aseprite files directly into MonoGame.',
  favicon: 'img/favicon.ico',
  url: 'https://monogameaseprite.net/',
  baseUrl: '/',
  organizationName: 'aristurtledev', // Usually your GitHub org/user name.
  projectName: 'monogame-aseprite-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'ignore',
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
          showLastUpdateTime: true,
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
            docId: 'introduction',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'api/MonoGame.Aseprite/MonoGame.Aseprite',
            position: 'left',
            label: 'API'
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
