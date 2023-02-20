---

title: RawTilemap Class
sidebar_label: RawTilemap
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of a tilemap.

```csharp
public sealed class RawTilemap : IEquatable<RawTilemap>
```

**Inheritance:** object → RawTilemap

**Implements:** IEquatable\<RawTilemap\>

## Properties

| Name                                     | Description                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Name](Properties/Name)               | Gets the name assigned to the tilemap.                                                                                                              |
| [RawLayers](Properties/RawLayers)     | Gets a read\-only span of the [RawTilemapLayer](../RawTilemapLayer/) that represent the tilemap layers for the  tilemap.                    |
| [RawTilesets](Properties/RawTilesets) | Gets a read\-only span of the [RawTileset](../RawTileset/) elements that represent the tilesets used by the  tilemap layers in the tilemap. |

## Methods

| Name                                    | Description                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| [Equals(RawTilemap)](Methods/Equals) | Returns a value that indicates if the given RawTilemap is equal to thisRawTilemap. |


