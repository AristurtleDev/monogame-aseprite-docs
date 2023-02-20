---

title: SpriteProcessor.ProcessRaw Method
sidebar_label: ProcessRaw
---
**Declaring Type:** [SpriteProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes a [RawSprite](../../../../RawTypes/RawSprite/) from the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) at the specified index in the  given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static RawSprite ProcessRaw(AsepriteFile aseFile, int aseFrameIndex, bool onlyVisibleLayers = true, bool includeBackgroundLayer = false, bool includeTilemapLayers = true);
```

## Parameters

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) to processes.

`aseFrameIndex`  int

The index of the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) in the [AsepriteFile](../../../../AsepriteFile/) to process.

`onlyVisibleLayers`  bool

Indicates if only [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on visible [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements should  be included.

`includeBackgroundLayer`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on an [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) marked as the background  layer should be included.

`includeTilemapLayers`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on a [AsepriteTilemapLayer](../../../../AsepriteTypes/AsepriteTilemapLayer/) should be included.

## Returns

[RawSprite](../../../../RawTypes/RawSprite/)

The [RawSprite](../../../../RawTypes/RawSprite/) created by this method.

## Exceptions

ArgumentOutOfRangeException

Thrown if the specified  [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) index is less than zero or is greater than or equal to  the total number of  [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) elements in the given  [AsepriteFile](../../../../AsepriteFile/).


