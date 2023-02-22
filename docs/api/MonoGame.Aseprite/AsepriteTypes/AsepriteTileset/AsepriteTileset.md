---
title: AsepriteTileset Class
sidebar_label: AsepriteTileset

---

**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a tileset in an aseprite file.

```csharp
public sealed class AsepriteTileset
```

**Inheritance:** object → AsepriteTileset

## Properties

| Name                                   | Description                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Height](Properties/Height.md)         | Gets the height, in pixels, of the source image for this AsepriteTileset.                                                       |
| [ID](Properties/ID.md)                 | Gets the id assigned to this AsepriteTileset.                                                                                   |
| [Name](Properties/Name.md)             | Gets the name assigned to this AsepriteTileset.                                                                                 |
| [Pixels](Properties/Pixels.md)         | Gets a read\-only span of the pixel data for this AsepriteTileset.  Pixel order is from  top\-to\-bottom, read left\-to\-right. |
| [TileCount](Properties/TileCount.md)   | Gets the total number of tiles in this AsepriteTileset.                                                                         |
| [TileHeight](Properties/TileHeight.md) | Gets the height, in pixels, of each tile in this AsepriteTileset.                                                               |
| [TileWidth](Properties/TileWidth.md)   | Gets the width, in pixels, of each tile in this AsepriteTileset.                                                                |
| [Width](Properties/Width.md)           | Gets the width, in pixels, of the source image for this AsepriteTileset.                                                        |

## Indexers

| Name                            | Description                                                                                                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Item\[int\]](Indexers/Item.md) | Gets a read\-only span of the color values that represent the pixel data for a the tile at the specified  index in this AsepriteTileset.  Pixel order is from top\-to\-bottom, read left\-to\-right. |

## Methods

| Name                               | Description                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GetTile(int)](Methods/GetTile.md) | Gets a read\-only span of the color values that represent the pixel data for a the tile at the specified  index in this AsepriteTileset.  Pixel order is from top\-to\-bottom, read left\-to\-right. |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*