---

title: SpriteProcessor.Process Method
sidebar_label: Process
---
**Declaring Type:** [SpriteProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes a [Sprite](../../../../Sprites/Sprite/) from the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) at the specified index in the given[AsepriteFile](../../../../AsepriteFile/)

```csharp
public static Sprite Process(GraphicsDevice device, AsepriteFile aseFile, int aseFrameIndex, bool onlyVisibleLayers = true, bool includeBackgroundLayer = false, bool includeTilemapLayers = true);
```

## Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) to processes.

`aseFrameIndex`  int

The index of the [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) in the [AsepriteFile](../../../../AsepriteFile/) to process.

`onlyVisibleLayers`  bool

Indicates if only [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on visible [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements should be included.

`includeBackgroundLayer`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) on the [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) marked as the background layer  should be included.

`includeTilemapLayers`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) on a [AsepriteTilemapLayer](../../../../AsepriteTypes/AsepriteTilemapLayer/) should be included.

## Returns

[Sprite](../../../../Sprites/Sprite/)

The [Sprite](../../../../Sprites/Sprite/) created by this method.

## Exceptions

ArgumentOutOfRangeException

Thrown if the specified frame index is less than zero or is greater than or equal to the total number [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) elements in the given [AsepriteFile](../../../../AsepriteFile/).

## See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [Sprite](../../../../Sprites/Sprite/)


