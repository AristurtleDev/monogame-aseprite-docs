---

title: SpriteSheetProcessor.Process Method
sidebar_label: Process
---
**Declaring Type:** [SpriteSheetProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes a [SpriteSheet](../../../../Sprites/SpriteSheet/) from the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static SpriteSheet Process(GraphicsDevice device, AsepriteFile aseFile, bool onlyVisibleLayers = true, bool includeBackgroundLayer = false, bool includeTilemapLayers = true, bool mergeDuplicates = true, int borderPadding = 0, int spacing = 0, int innerPadding = 0);
```

## Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) to process the [SpriteSheet](../../../../Sprites/SpriteSheet/) from.

`onlyVisibleLayers`  bool

Indicates if only [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on visible [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements should  be included.

`includeBackgroundLayer`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on the [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements marked as the  background layer should be included.

`includeTilemapLayers`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on a [AsepriteTilemapLayer](../../../../AsepriteTypes/AsepriteTilemapLayer/) element should be  included.

`mergeDuplicates`  bool

Indicates if duplicate [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) elements should be merged into one.

`borderPadding`  int

The amount of transparent pixels to add between the edge of the generated image

`spacing`  int

The amount of transparent pixels to add between each texture region in the generated image.

`innerPadding`  int

The amount of transparent pixels to add around the edge of each texture region in the generated image.

## Returns

[SpriteSheet](../../../../Sprites/SpriteSheet/)

The [SpriteSheet](../../../../Sprites/SpriteSheet/) created by this method.

## Exceptions

InvalidOperationException

Thrown if [AsepriteTag](../../../../AsepriteTypes/AsepriteTag/) elements are found in the [AsepriteFile](../../../../AsepriteFile/) with duplicate  names.  A [SpriteSheet](../../../../Sprites/SpriteSheet/) must contain tags with unique names even though aseprite does not  enforce unique names for [AsepriteTag](../../../../AsepriteTypes/AsepriteTag/) elements.

## See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [SpriteSheet](../../../../Sprites/SpriteSheet/)


