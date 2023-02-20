---

title: AsepriteFrame.FlattenFrame Method
sidebar_label: FlattenFrame
---
**Declaring Type:** [AsepriteFrame](../)  
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../../)  
**Assembly:** MonoGame.Aseprite

Flattens this  [AsepriteFrame](../) by combining all [AsepriteCel](../../AsepriteCel/) elements into a single  image representation.

```csharp
public Color[] FlattenFrame(bool onlyVisibleLayers = true, bool includeBackgroundLayer = false, bool includeTilemapCel = true);
```

## Parameters

`onlyVisibleLayers`  bool

Indicates whether only [AsepriteCel](../../AsepriteCel/) elements on visible [AsepriteLayer](../../AsepriteLayer/) elements  should be included.

`includeBackgroundLayer`  bool

Indicates whether [AsepriteCel](../../AsepriteCel/) elements are on a [AsepriteLayer](../../AsepriteLayer/) marked as a  background layer should be included.

`includeTilemapCel`  bool

Indicates whether [AsepriteTilemapCel](../../AsepriteTilemapCel/) elements are on [AsepriteTilemapLayer](../../AsepriteTilemapLayer/)elements should be included. 

## Returns

Color\[\]

A new Array of color values that represent the image of this  [AsepriteFrame](../).


