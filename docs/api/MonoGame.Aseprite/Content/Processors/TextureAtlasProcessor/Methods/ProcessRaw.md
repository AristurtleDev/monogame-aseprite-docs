---

title: TextureAtlasProcessor.ProcessRaw Method
sidebar_label: ProcessRaw
---
**Declaring Type:** [TextureAtlasProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes a [RawTextureAtlas](../../../../RawTypes/RawTextureAtlas/) from the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static RawTextureAtlas ProcessRaw(AsepriteFile aseFile, bool onlyVisibleLayers = true, bool includeBackgroundLayer = false, bool includeTilemapLayers = true, bool mergeDuplicates = true, int borderPadding = 0, int spacing = 0, int innerPadding = 0);
```

## Parameters

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) to process the [RawTextureAtlas](../../../../RawTypes/RawTextureAtlas/) from.

`onlyVisibleLayers`  bool

Indicates if only [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on visible [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements should  be included.

`includeBackgroundLayer`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on the [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) marked as the background  layer should be included.

`includeTilemapLayers`  bool

Indicates if [AsepriteCel](../../../../AsepriteTypes/AsepriteCel/) elements on a [AsepriteTilemapLayer](../../../../AsepriteTypes/AsepriteTilemapLayer/) should be included.

`mergeDuplicates`  bool

Indicates if duplicate [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) elements should be merged into one.

`borderPadding`  int

The amount of transparent pixels to add between the edge of the generated image

`spacing`  int

The amount of transparent pixels to add between each texture region in the generated image.

`innerPadding`  int

The amount of transparent pixels to add around the edge of each texture region in the generated image.

## Returns

[RawTextureAtlas](../../../../RawTypes/RawTextureAtlas/)

The [RawTextureAtlas](../../../../RawTypes/RawTextureAtlas/) created by this method.


