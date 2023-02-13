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
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/setup-mgcb-editor',
        'getting-started/load-aseprite-file/load-aseprite-file',
      ]
    },
    {
      type: 'category',
      label: "Processors",
      items: [
        'processors/processors-overview',
        'processors/sprite-processor',
        'processors/texture-atlas-processor',
        'processors/sprite-sheet-processor',
        'processors/tileset-processor',
        'processors/tilemap-processor',
        'processors/animated-tilemap-processor'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Sprite',
          items: [
            'guides/sprite/sprite',
            'guides/sprite/constructors',
            {
              type: 'category',
              label: 'Properties',
              items: [
                'guides/sprite/properties/color',
                'guides/sprite/properties/flip-horizontally',
                'guides/sprite/properties/flip-vertically',
                'guides/sprite/properties/is-visible',
                'guides/sprite/properties/layer-depth',
                'guides/sprite/properties/name',
                'guides/sprite/properties/origin',
                'guides/sprite/properties/origin-x',
                'guides/sprite/properties/origin-y',
                'guides/sprite/properties/rotation',
                'guides/sprite/properties/scale',
                'guides/sprite/properties/scale-x',
                'guides/sprite/properties/scale-y',
                'guides/sprite/properties/sprite-effects',
                'guides/sprite/properties/texture-region',
                'guides/sprite/properties/transparency',
              ]
            },
            {
              type: 'category',
              label: 'Methods',
              items: [
                'guides/sprite/methods/draw',
                'guides/sprite/methods/from-raw'
              ]
            }
          ]
        },
        'guides/texture-region',
        'guides/texture-atlas',
        'guides/sprite-sheet'
      ]
    },
  ],
  
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
