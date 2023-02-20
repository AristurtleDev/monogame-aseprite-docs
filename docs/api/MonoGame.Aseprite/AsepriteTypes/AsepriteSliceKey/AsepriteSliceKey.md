---

title: AsepriteSliceKey Class
sidebar_label: AsepriteSliceKey
---
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines the values of a key for a [AsepriteSlice](../AsepriteSlice/).

```csharp
public sealed class AsepriteSliceKey
```

**Inheritance:** object → AsepriteSliceKey

## Properties

| Name                                       | Description                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bounds](Properties/Bounds)             | Gets the rectangular bounds of the [AsepriteSlice](../AsepriteSlice/) during this AsepriteSliceKey.                                                                                                                                                                       |
| [CenterBounds](Properties/CenterBounds) | Gets the rectangular bounds of the center rectangle of the [AsepriteSlice](../AsepriteSlice/), relative to the [Bounds](Properties/Bounds), during this AsepriteSliceKey, if the [AsepriteSlice](../AsepriteSlice/) is a  nine\-patch slice, otherwise, .      |
| [FrameIndex](Properties/FrameIndex)     | Gets the index of the [AsepriteFrame](../AsepriteFrame/) this AsepriteSliceKey is valid starting on.                                                                                                                                                                      |
| [HasPivot](Properties/HasPivot)         | Gets a value that indicates if this AsepriteSliceKey contains pivot values.  When , guarantees that the [Pivot](Properties/Pivot) value is not .                                                                                                                               |
| [IsNinePatch](Properties/IsNinePatch)   | Gets a value that indicates if this AsepriteSliceKey is for a nine\-patch [AsepriteSlice](../AsepriteSlice/).  When , guarantees that the [CenterBounds](Properties/CenterBounds)value is not .                                                                        |
| [Pivot](Properties/Pivot)               | Gets the x\- and y\-coordinate location of the pivot point of the [AsepriteSlice](../AsepriteSlice/), relative to the[Bounds](Properties/Bounds), during this AsepriteSliceKey, if the [AsepriteSlice](../AsepriteSlice/) contains  pivot values; otherwise, . |


