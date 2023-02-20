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
| [Tileset(string, Texture2D, int, int)](constructors/) | Initializes a new instance of the Tileset class. |

## Properties

| Name                                     | Description                                                                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [ColumnCount](Properties/ColumnCount) | Gets the total number of columns in this Tileset.                                                                              |
| [Name](Properties/Name)               | Gets the name assigned to this Tileset.                                                                                        |
| [RowCount](Properties/RowCount)       | Gets the total number of rows in this Tileset.                                                                                 |
| [Texture](Properties/Texture)         | Gets the source texture image used by this Tileset.                                                                            |
| [TileCount](Properties/TileCount)     | G   ets the total number of tiles in this Tileset.                                                                             |
| [TileHeight](Properties/TileHeight)   | Gets the height, in pixels of each tile in this Tileset.                                                                       |
| [TileWidth](Properties/TileWidth)     | Gets the width, in pixels, of each tile in this Tileset.                                                                       |
| [Tiles](Properties/Tiles)             | Gets a read\-only span of the [TextureRegion](../../TextureRegion/) elements that represent the tiles in this Tileset. |

## Indexers

| Name                                             | Description                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [Item\[Point\]](Indexers/Item#itempoint)      | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row location in this Tileset. |
| [Item\[int, int\]](Indexers/Item#itemint-int) | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset.          |
| [Item\[int\]](Indexers/Item#itemint)          | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.                    |

## Methods

| Name                                                                                         | Description                                                                                                          |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [FromRaw(GraphicsDevice, RawTileset)](Methods/FromRaw)                                    | Creates a new instance of the Tileset class from the given [RawTileset](../../RawTypes/RawTileset/).         |
| [GetTile(Point)](Methods/GetTile#gettilepoint)                                            | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [GetTile(int)](Methods/GetTile#gettileint)                                                | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.           |
| [GetTile(int, int)](Methods/GetTile#gettileint-int)                                       | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [TryGetTile(Point, TextureRegion)](Methods/TryGetTile#trygettilepoint-textureregion)      | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |
| [TryGetTile(int, TextureRegion)](Methods/TryGetTile#trygettileint-textureregion)          | Gets the [TextureRegion](../../TextureRegion/) of the tile at the specified index in this Tileset.           |
| [TryGetTile(int, int, TextureRegion)](Methods/TryGetTile#trygettileint-int-textureregion) | Gets the [TextureRegion](../../TextureRegion/) for the tile at the specified column and row in this Tileset. |


