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
  someSidebar: {
    About: ["introduction"],
    "Getting Started": [
      "getting-started/monogame37installation",
      "getting-started/monogame38installation",
      "getting-started/importing-aseprite-file",
      "getting-started/using-in-game",
      "getting-started/animated-sprite-class",
      "getting-started/migratingv1v2",
    ],
  },
  apiSideBar: {
    "MonoGame.Aseprite": [
      "api/index",
      {
        ".ContentReaders": [
          "api/monogame_aseprite_contentreaders",
          {
            AsepriteDocumentTypeReader: [
              "api/asepritedocumenttypereader",
              {
                Methods: [
                  "api/asepritedocumenttypereader_read_byte____graphicsdevice_",
                  "api/asepritedocumenttypereader_read_contentreader__asepritedocument_",
                  "api/asepritedocumenttypereader_readinternal_binaryreader__graphicsdevice__asepritedocument_",
                ],
              },
            ],
          },
        ],
        ".Documents": [
          "api/monogame_aseprite_documents",
          {
            AsepriteDocument: [
              "api/asepritedocument",
              {
                Constructors: ["api/asepritedocument_asepritedocument__"],
                Properties: [
                  "api/asepritedocument_frames",
                  "api/asepritedocument_slices",
                  "api/asepritedocument_tags",
                  "api/asepritedocument_texture",
                  "api/asepritedocument_textureheight",
                  "api/asepritedocument_texturewidth",
                ],
                Methods: [
                  "api/asepritedocument_dispose__",
                  "api/asepritedocument_dispose_bool_",
                ],
              },
            ],
            AsepriteFrame: [
              "api/asepriteframe",
              {
                Constructors: ["api/asepriteframe_asepriteframe__"],
                Properties: [
                  "api/asepriteframe_duration",
                  "api/asepriteframe_height",
                  "api/asepriteframe_width",
                  "api/asepriteframe_x",
                  "api/asepriteframe_y",
                ],
              },
            ],
            AsepriteSlice: [
              "api/asepriteslice",
              {
                Constructors: ["api/asepriteslice_asepriteslice__"],
                Properties: [
                  "api/asepriteslice_color",
                  "api/asepriteslice_name",
                  "api/asepriteslice_slicekeys",
                ],
              },
            ],
            AsepriteSliceKey: [
              "api/asepriteslicekey",
              {
                Constructors: ["api/asepriteslicekey_asepriteslicekey__"],
                Properties: [
                  "api/asepriteslicekey_centerheight",
                  "api/asepriteslicekey_centerwidth",
                  "api/asepriteslicekey_centerx",
                  "api/asepriteslicekey_centery",
                  "api/asepriteslicekey_frameindex",
                  "api/asepriteslicekey_hasninepatch",
                  "api/asepriteslicekey_haspivot",
                  "api/asepriteslicekey_height",
                  "api/asepriteslicekey_pivotx",
                  "api/asepriteslicekey_pivoty",
                  "api/asepriteslicekey_width",
                  "api/asepriteslicekey_x",
                  "api/asepriteslicekey_y",
                ],
              },
            ],
            AsepriteTag: [
              "api/asepritetag",
              {
                Constructors: ["api/asepritetag_asepritetag__"],
                Properties: [
                  "api/asepritetag_color",
                  "api/asepritetag_direction",
                  "api/asepritetag_from",
                  "api/asepritetag_name",
                  "api/asepritetag_to",
                ],
              },
            ],
            AsepriteTagDirection: ["api/asepritetagdirection"],
            AnimatedSprite: [
              "api/animatedsprite",
              {
                Constructors: [
                  "api/animatedsprite_animatedsprite_texture2d_",
                  "api/animatedsprite_animatedsprite_texture2d__vector2_",
                  "api/animatedsprite_animatedsprite_asepritedocument_",
                  "api/animatedsprite_animatedsprite_asepritedocument__vector2_",
                ],
                Properties: [
                  "api/animatedsprite_animating",
                  "api/animatedsprite_animations",
                  "api/animatedsprite_currentanimation",
                  "api/animatedsprite_currentframe",
                  "api/animatedsprite_currentframeindex",
                  "api/animatedsprite_frames",
                  "api/animatedsprite_frametimer",
                  "api/animatedsprite_height",
                  "api/animatedsprite_onanimationloop",
                  "api/animatedsprite_onframebegin",
                  "api/animatedsprite_onframeend",
                  "api/animatedsprite_slices",
                  "api/animatedsprite_width",
                ],
                Methods: [
                  "api/animatedsprite_addanimation_animation_",
                  "api/animatedsprite_addanimation_string__int__int_",
                  "api/animatedsprite_addanimations_animation___",
                  "api/animatedsprite_addanimations_ienumerable_animation__",
                  "api/animatedsprite_addframe_frame_",
                  "api/animatedsprite_addframe_int__int__int__int__float_",
                  "api/animatedsprite_addframes_frame___",
                  "api/animatedsprite_addframes_ienumerable_frame__",
                  "api/animatedsprite_addslice_slice_",
                  "api/animatedsprite_addslice_string__color__dictionary_int_slicekey__",
                  "api/animatedsprite_addslice_string__color__ienumerable_slicekey__",
                  "api/animatedsprite_addslice_string__color__slicekey___",
                  "api/animatedsprite_addslice_string__dictionary_int_slicekey__",
                  "api/animatedsprite_addslice_string__ienumerable_slicekey__",
                  "api/animatedsprite_addslice_string__slicekey___",
                  "api/animatedsprite_addslices_slice___",
                  "api/animatedsprite_getslicecolor_string_",
                  "api/animatedsprite_play_string_",
                  "api/animatedsprite_render_spritebatch_",
                  "api/animatedsprite_trygetcurrentframeslice_string__slicekey_",
                  "api/animatedsprite_update_float_",
                ],
              },
            ],
          },
        ],
        ".Graphics": [
          "api/monogame_aseprite_graphics",
          {
            Animation: [
              "api/animation",
              {
                Constructors: ["api/animation_animation_string__int__int_"],
                Fields: [
                  "api/animation_from",
                  "api/animation_name",
                  "api/animation_to",
                ],
              },
            ],
            Frame: [
              "api/frame",
              {
                Constructors: [
                  "api/frame_frame_rectangle__float_",
                  "api/frame_frame_int__int__int__int__float_",
                ],
                Fields: ["api/frame_bounds", "api/frame_duration"],
              },
            ],
            Slice: [
              "api/slice",
              {
                Constructors: [
                  "api/slice_slice_string__color__dictionary_int_slicekey__",
                  "api/slice_slice_string__color__ienumerable_slicekey__",
                  "api/slice_slice_string__color__slicekey___",
                  "api/slice_slice_string__dictionary_int_slicekey__",
                  "api/slice_slice_string__ienumerable_slicekey__",
                  "api/slice_slice_string__slicekey___",
                ],
                Fields: ["api/slice_color", "api/slice_keys", "api/slice_name"],
              },
            ],
            SliceKey: [
              "api/slicekey",
              {
                Constructors: [
                  "api/slicekey_slicekey_int__int__int__int__int_",
                  "api/slicekey_slicekey_int__point__point_",
                  "api/slicekey_slicekey_int__rectangle_",
                ],
                Fields: ["api/slicekey_bounds", "api/slicekey_frame"],
              },
            ],
            Sprite: [
              "api/sprite",
              {
                Constructors: [
                  "api/sprite_sprite__",
                  "api/sprite_sprite_texture2d_",
                  "api/sprite_sprite_texture2d__vector2_",
                ],
                Properties: [
                  "api/sprite_color",
                  "api/sprite_height",
                  "api/sprite_layerdepth",
                  "api/sprite_origin",
                  "api/sprite_position",
                  "api/sprite_rotation",
                  "api/sprite_scale",
                  "api/sprite_sourcerectangle",
                  "api/sprite_spriteeffect",
                  "api/sprite_texture",
                  "api/sprite_width",
                  "api/sprite_height",
                  "api/sprite_x",
                  "api/sprite_y",
                ],
                Methods: [
                  "api/sprite_render_spritebatch_",
                  "api/sprite_update_gametime_",
                  "api/sprite_update_float_",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

module.exports = sidebars;
