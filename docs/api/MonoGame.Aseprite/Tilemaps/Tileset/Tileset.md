---
title: Tileset Class
sidebar_label: Tileset

---

**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a Tileset with a source image and named [TextureRegion](../../TextureRegion/) elements that  represent  the tiles.

```csharp
public sealed class Tileset
```

**Inheritance:** object → Tileset

## Remarks

A Tileset is similar in function to a [RawTextureAtlas](../../RawTypes/RawTextureAtlas/) in that it uses a single  source image and has named [TextureRegion](../../TextureRegion/) for sections within that image.  The difference is that  a Tileset autogenerates the [TextureRegion](../../TextureRegion/) elements into a grid like structure and  the accessor for each [TextureRegion](../../TextureRegion/) is by location id or column and row only.

## Constructors

| Name                                                          | Description                                      |
| ------------------------------------------------------------- | ------------------------------------------------ |
| [Tileset(string, Texture2D, int, int)](Constructors/) | Initializes a new instance of the Tileset class. |

## Properties

| Name                                     | Description                                                                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [ColumnCount](Properties/ColumnCount.md) | Gets the total number of columns in this Tileset.                                                                              |
| [Name](Properties/Name.md)               | Gets the name assigned to this Tileset.                                                                                        |
| [RowCount](Properties/RowCount.md)       | Gets the total number of rows in this Tileset.                                                                                 |
| [Texture](Properties/Texture.md)         | Gets the source texture image used by this Tileset.                                                                            |
| [TileCount](Properties/TileCount.md)     | G   ets the total number of tiles in this Tileset.                                                                             |
| [TileHeight](Properties/TileHeight.md)   | Gets the height, in pixels of each tile in this Tileset.                                                                       |
| [TileWidth](Properties/TileWidth.md)     | Gets the width, in pixels, of each tile in this Tileset.                                                                       |
| [Tiles](Properties/Tiles.md)             | Gets a read\-only span of the [TextureRegion](../../TextureRegion/) elements that represent the tiles in this Tileset. |

## Indexers

| Name                                             | Description                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [Item\[Point\]](Indexers/Item.md#itempoint)      | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row location in this Tileset. |
| [Item\[int, int\]](Indexers/Item.md#itemint-int) | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset.          |
| [Item\[int\]](Indexers/Item.md#itemint)          | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.                    |

## Methods

| Name                                                                                         | Description                                                                                                          |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [FromRaw(GraphicsDevice, RawTileset)](Methods/FromRaw.md)                                    | Creates a new instance of the Tileset class from the given [RawTileset](../../RawTypes/RawTileset/).         |
| [GetTile(Point)](Methods/GetTile.md#gettilepoint)                                            | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [GetTile(int)](Methods/GetTile.md#gettileint)                                                | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.           |
| [GetTile(int, int)](Methods/GetTile.md#gettileint-int)                                       | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [TryGetTile(Point, TextureRegion)](Methods/TryGetTile.md#trygettilepoint-textureregion)      | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [TryGetTile(int, TextureRegion)](Methods/TryGetTile.md#trygettileint-textureregion)          | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.           |
| [TryGetTile(int, int, TextureRegion)](Methods/TryGetTile.md#trygettileint-int-textureregion) | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
