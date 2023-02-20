---

title: RawAnimatedTilemap Class
sidebar_label: RawAnimatedTilemap
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines the raw data for an animated tilemap.

```csharp
public sealed class RawAnimatedTilemap : IEquatable<RawAnimatedTilemap>
```

**Inheritance:** object → RawAnimatedTilemap

**Implements:** IEquatable\<RawAnimatedTilemap\>

## Properties

| Name                                               | Description                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Name](Properties/Name)                         | Gets the name assigned to the animated tilemap.                                                                                       |
| [RawTilemapFrames](Properties/RawTilemapFrames) | Gets a read\-only span of the [RawTilemapFrame](../RawTilemapFrame/) data for animated tilemap.                               |
| [RawTilesets](Properties/RawTilesets)           | Gets a read\-only span of the [RawTileset](../RawTileset/) data for the tilesets used by the layers of the  animated tilemap. |

## Methods

| Name                                            | Description                                                                                        |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Equals(RawAnimatedTilemap)](Methods/Equals) | Returns a value that indicates if the given RawAnimatedTilemap is equal to thisRawAnimatedTilemap. |


