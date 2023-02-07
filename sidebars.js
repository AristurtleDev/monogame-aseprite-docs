/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: "MonoGame.Aseprite",
      items: [
        'introduction',
        'mgcb-editor'
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/mgcb-editor-setup',
        'getting-started/the-aseprite-file',
        'getting-started/processors'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/loading-aseprite-file',
        'guides/using-the-mgcb-editor',
        'guides/texture-region',
        'guides/sprite',
        'guides/texture-atlas',
        'guides/sprite-sheet'
      ]
    },
    {
      type: 'category',
      label: 'Importing An Aseprite File',
      items: [
        'import-aseprite-file/import-aseprite-file',
        'import-aseprite-file/import-aseprite-file-mgcb'
      ]
    }
  ]
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
