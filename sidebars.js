/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const docs_types_animated_sprite = {
  type: "category",
  label: "AnimatedSprite",
  items: ["monogame-aseprite-types/animated-sprite/animated-sprite"],
};

const docs_types_animated_tilemap = {
  type: "category",
  label: "AnimatedTilemap",
  items: ["monogame-aseprite-types/animated-tilemap/animated-tilemap"],
};

const docs_types_sprite = {
  type: "category",
  label: "Sprite",
  items: [
    "monogame-aseprite-types/sprite/sprite",
    "monogame-aseprite-types/sprite/constructors",
    {
      type: "category",
      label: "Properties",
      items: [
        "monogame-aseprite-types/sprite/properties/color",
        "monogame-aseprite-types/sprite/properties/flip-horizontally",
        "monogame-aseprite-types/sprite/properties/flip-vertically",
        "monogame-aseprite-types/sprite/properties/is-visible",
        "monogame-aseprite-types/sprite/properties/layer-depth",
        "monogame-aseprite-types/sprite/properties/name",
        "monogame-aseprite-types/sprite/properties/origin",
        "monogame-aseprite-types/sprite/properties/origin-x",
        "monogame-aseprite-types/sprite/properties/origin-y",
        "monogame-aseprite-types/sprite/properties/rotation",
        "monogame-aseprite-types/sprite/properties/scale",
        "monogame-aseprite-types/sprite/properties/scale-x",
        "monogame-aseprite-types/sprite/properties/scale-y",
        "monogame-aseprite-types/sprite/properties/sprite-effects",
        "monogame-aseprite-types/sprite/properties/texture-region",
        "monogame-aseprite-types/sprite/properties/transparency",
      ],
    },
    {
      type: "category",
      label: "Methods",
      items: ["monogame-aseprite-types/sprite/methods/draw", "monogame-aseprite-types/sprite/methods/from-raw"],
    },
  ],
};

const docs_types_sprite_sheet = {
  type: "category",
  label: "SpriteSheet",
  items: ["monogame-aseprite-types/sprite-sheet/sprite-sheet"],
};

const docs_types_texture_atlas = {
  type: "category",
  label: "TextureAtlas",
  items: ["monogame-aseprite-types/texture-atlas/texture-atlas"],
};

const docs_types_texture_region = {
  type: "category",
  label: "TextureRegion",
  items: ["monogame-aseprite-types/texture-region/texture-region"],
};

const docs_types_tilemap = {
  type: "category",
  label: "Tilemap",
  items: ["monogame-aseprite-types/tilemap/tilemap"],
};

const docs_types_tileset = {
  type: "category",
  label: "Tileset",
  items: ["monogame-aseprite-types/tileset/tileset"],
};

const docs_types = {
  type: "category",
  label: "Types",
  items: [docs_types_animated_sprite, docs_types_animated_tilemap, docs_types_sprite, docs_types_sprite_sheet, docs_types_texture_atlas, docs_types_texture_region, docs_types_tilemap, docs_types_tileset],
};
const docs_api = {
  type: "category",
  label: 'MonoGame.Aseprite',
  collapsible: false,
  collapsed: false,
  items: [
    {
      type: "autogenerated",
      dirName: 'api/MonoGame.Aseprite'
    }
  ]
}

const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "MonoGame.Aseprite",
      items: ["introduction"],
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/installation", "getting-started/setup-mgcb-editor", "getting-started/load-aseprite-file/load-aseprite-file"],
    },
    {
      type: "category",
      label: "Processors",
      items: [
        "processors/processors-overview",
        "processors/sprite-processor",
        "processors/texture-atlas-processor",
        "processors/sprite-sheet-processor",
        "processors/tileset-processor",
        "processors/tilemap-processor",
        "processors/animated-tilemap-processor",
      ],
    },
    docs_types,
  ],
  apiSidebar: [
    docs_api
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
