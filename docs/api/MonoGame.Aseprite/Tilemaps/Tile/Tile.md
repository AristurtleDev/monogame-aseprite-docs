---

title: Tile Struct
sidebar_label: Tile Struct
---
**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a tile value in a [TilemapLayer](../TilemapLayer/).

```csharp
public struct Tile
```

**Inheritance:** object → ValueType → Tile

## Constructors

| Name                                                                          | Description                                   |
| ----------------------------------------------------------------------------- | --------------------------------------------- |
| [Tile()](constructors/#tile)                                          | Initializes a new instance of the Tile class. |
| [Tile(int)](constructors/#tileint)                                    | Initializes a new Tile value.                 |
| [Tile(int, bool, bool, float)](constructors/#tileint-bool-bool-float) | Initializes a new Tile value.                 |

## Fields

| Name                                           | Description                                                                                                                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Empty](Fields/Empty)                       | Represents a Tile with its properties left uninitialized.                                                                                                             |
| [FlipHorizontally](Fields/FlipHorizontally) | Indicates whether this Tile should be flipped horizontally rendered.                                                                                                  |
| [FlipVertically](Fields/FlipVertically)     | Indicates whether this Tile should be flipped vertically rendered.                                                                                                    |
| [Rotation](Fields/Rotation)                 | The amount of rotation, in radians, to apply when rendering this Tile.                                                                                                |
| [TilesetTileID](Fields/TilesetTileID)       | The ID (or index) of the source tile in the [Tileset](../Tileset/) that represents the [TextureRegion](../../TextureRegion/) to render for this Tile. |

## Properties

| Name                             | Description                                            |
| -------------------------------- | ------------------------------------------------------ |
| [IsEmpty](Properties/IsEmpty) | Gets a value that indicates if this is an empty Tile.  |


