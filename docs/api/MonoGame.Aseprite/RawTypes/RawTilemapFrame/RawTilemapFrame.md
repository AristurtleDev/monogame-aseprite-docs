---

title: RawTilemapFrame Class
sidebar_label: RawTilemapFrame
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of a tilemap frame.

```csharp
public sealed class RawTilemapFrame : IEquatable<RawTilemapFrame>
```

**Inheritance:** object → RawTilemapFrame

**Implements:** IEquatable\<RawTilemapFrame\>

## Properties

| Name                                                           | Description                                                                                                                            |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [DurationInMilliseconds](Properties/DurationInMilliseconds) | Gets the duration, in milliseconds, of the tilemap frame.                                                                              |
| [RawTilemapLayers](Properties/RawTilemapLayers)             | Gets a read\-only span of the [RawTilemapLayer](../RawTilemapLayer/) that represent the tilemap layers for the  tilemap frame. |

## Methods

| Name                                         | Description                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Equals(RawTilemapFrame)](Methods/Equals) | Returns a value that indicates if the given RawTilemapFrame is equal to thisRawTilemapFrame. |


