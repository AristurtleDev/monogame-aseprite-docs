---
title: TilemapLayer Class
sidebar_label: TilemapLayer

---

**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a grid\-like layer in a tilemap that contains a collection of tiles.

```csharp
public sealed class TilemapLayer : IEnumerable<Tile>, IEnumerable
```

**Inheritance:** object → TilemapLayer

**Implements:** IEnumerable\<[Tile](../Tile/)\>,IEnumerable

## Constructors

| Name                                                                      | Description                                           |
| ------------------------------------------------------------------------- | ----------------------------------------------------- |
| [TilemapLayer(string, Tileset, int, int, Vector2)](Constructors/) | Initializes a new instance of the TilemapLayer class. |

## Properties

| Name                                       | Description                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Columns](Properties/Columns.md)           | Gets the total number of columns in this TilemapLayer.                                                                                                  |
| [Height](Properties/Height.md)             | Gets the height, in pixels, of this TilemapLayer.                                                                                                       |
| [IsVisible](Properties/IsVisible.md)       | Gets or Sets a value that indicates whether this TilemapLayer is visible and should be  rendered.                                                       |
| [Name](Properties/Name.md)                 | Gets the name assigned to this  TilemapLayer.                                                                                                           |
| [Offset](Properties/Offset.md)             | Gets or Sets the x\- and y\-coordinate position offset, relative to the position of the [Tilemap](../Tilemap/), to render this TilemapLayer at  |
| [OffsetX](Properties/OffsetX.md)           | Gets or Sets the x\-position offset, relative to the position of the [Tilemap](../Tilemap/), to render this TilemapLayer at                     |
| [OffsetY](Properties/OffsetY.md)           | Gets or Sets the y\-position offset, relative to the position of the [Tilemap](../Tilemap/), to render this TilemapLayer at                     |
| [Rows](Properties/Rows.md)                 | Gets the total number of rows in this TilemapLayer.                                                                                                     |
| [TileCount](Properties/TileCount.md)       | Gets the total number of [Tile](../Tile/) elements in this TilemapLayer.                                                                        |
| [Tiles](Properties/Tiles.md)               | Gets a read\-only span of the [Tile](../Tile/) elements in this TilemapLayer.                                                                   |
| [Tileset](Properties/Tileset.md)           | Gets or Sets the source [Tileset](Properties/Tileset.md) referenced by the [Tile](../Tile/) elements in this TilemapLayer.                      |
| [Transparency](Properties/Transparency.md) | Gets or Sets the transparency of this TilemapLayer.                                                                                                     |
| [Width](Properties/Width.md)               | Gets the width, in pixels, of this TilemapLayer.                                                                                                        |

## Indexers

| Name                                             | Description                                                                                                      |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [Item\[Point\]](Indexers/Item.md#itempoint)      | Gets the [Tile](../Tile/) element located at the specified column and row location in this TilemapLayer. |
| [Item\[int, int\]](Indexers/Item.md#itemint-int) | Gets the [Tile](../Tile/) element located at the specified column and row in this TilemapLayer.          |
| [Item\[int\]](Indexers/Item.md#itemint)          | Gets the [Tile](../Tile/) element at the specified index in this TilemapLayer                            |

## Methods

| Name                                                                                                             | Description                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Clear()](Methods/Clear.md)                                                                                      | Clears all [Tile](../Tile/) elements in this TilemapLayer by resetting them to an empty  value.                                                                                    |
| [Draw(SpriteBatch, Vector2, Color)](Methods/Draw.md#drawspritebatch-vector2-color)                               | Draws this TilemapLayer layer using the SpriteBatch.                                                                                                                                       |
| [Draw(SpriteBatch, Vector2, Color, Vector2, float)](Methods/Draw.md#drawspritebatch-vector2-color-vector2-float) | Draws this TilemapLayer layer using the SpriteBatch.                                                                                                                                       |
| [Draw(SpriteBatch, Vector2, Color, float, float)](Methods/Draw.md#drawspritebatch-vector2-color-float-float)     | Draws this TilemapLayer layer using the SpriteBatch.                                                                                                                                       |
| [GetEnumerator()](Methods/GetEnumerator.md)                                                                      | Returns an enumerator that iterates through all [Tile](../Tile/) elements in this TilemapLayer.  The order tiles in the enumeration is from top\-to\-bottom, read left\-to\-right. |
| [GetTile(Point)](Methods/GetTile.md#gettilepoint)                                                                | Gets the [Tile](../Tile/) element located at the specified column and row location in this TilemapLayer.                                                                           |
| [GetTile(int)](Methods/GetTile.md#gettileint)                                                                    | Gets the [Tile](../Tile/) element located at the specified index in this TilemapLayer.                                                                                             |
| [GetTile(int, int)](Methods/GetTile.md#gettileint-int)                                                           | Gets the [Tile](../Tile/) element located at the specified column and row in this TilemapLayer.                                                                                    |
| [IsEmpty(Point)](Methods/IsEmpty.md#isemptypoint)                                                                | Returns a value that indicates whether the [Tile](../Tile/) element at the specified column and row  location in  this TilemapLayer is empty.                                      |
| [IsEmpty(int)](Methods/IsEmpty.md#isemptyint)                                                                    | Returns a value that indicates whether the [Tile](../Tile/) element at the specified index in this TilemapLayer  is empty.                                                         |
| [IsEmpty(int, int)](Methods/IsEmpty.md#isemptyint-int)                                                           | Returns a value that indicates whether the [Tile](../Tile/) element at the specified column and row in  this TilemapLayer is empty.                                                |
| [SetTile(Point, Tile)](Methods/SetTile.md#settilepoint-tile)                                                     | Sets the specified column and row location in this TilemapLayer to the [Tile](../Tile/)element given.                                                                              |
| [SetTile(Point, int, bool, bool, float)](Methods/SetTile.md#settilepoint-int-bool-bool-float)                    | Sets the [Tile](../Tile/) element at the specified column and row location in this TilemapLayerusing the values provided.                                                          |
| [SetTile(int, Tile)](Methods/SetTile.md#settileint-tile)                                                         | Sets the specified index in this TilemapLayer to the [Tile](../Tile/) element given.                                                                                               |
| [SetTile(int, int, Tile)](Methods/SetTile.md#settileint-int-tile)                                                | Sets the specified column and row in this TilemapLayer to the [Tile](../Tile/) element  given.                                                                                     |
| [SetTile(int, int, bool, bool, float)](Methods/SetTile.md#settileint-int-bool-bool-float)                        | Sets the [Tile](../Tile/) element at the specified index in this TilemapLayer using the  values provided.                                                                          |
| [SetTile(int, int, int, bool, bool, float)](Methods/SetTile.md#settileint-int-int-bool-bool-float)               | Sets the [Tile](../Tile/) element at the specified column and row in this TilemapLayerusing the values provided.                                                                   |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
