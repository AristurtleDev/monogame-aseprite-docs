---

title: RawTilemapLayer Class
sidebar_label: RawTilemapLayer
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of a tilemap layer.

```csharp
public sealed class RawTilemapLayer : IEquatable<RawTilemapLayer>
```

**Inheritance:** object → RawTilemapLayer

**Implements:** IEquatable\<RawTilemapLayer\>

## Properties

| Name                                             | Description                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Columns](Properties/Columns)                 | Gets the total number of columns in tilemap layer.                                                                                  |
| [Name](Properties/Name)                       | Gets the name assigned to the tilemap layer.                                                                                        |
| [Offset](Properties/Offset)                   | Gets the offset of the tilemap layer.                                                                                               |
| [RawTilemapTiles](Properties/RawTilemapTiles) | Gets a read\-only span of the [RawTilemapTile](../RawTilemapTile/) elements that represent the tiles for the tilemap layer. |
| [Rows](Properties/Rows)                       | Gets the total number of rows in tilemap layer.                                                                                     |
| [TilesetID](Properties/TilesetID)             | Gets the id of the source tileset used by the tilemap layer.                                                                        |

## Methods

| Name                                         | Description                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Equals(RawTilemapLayer)](Methods/Equals) | Returns a value that indicates if the given RawTilemapLayer is equal to thisRawTilemapLayer. |


