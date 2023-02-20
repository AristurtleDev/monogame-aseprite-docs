---

title: AnimatedTilemapProcessor.Process Method
sidebar_label: Process
---
**Declaring Type:** [AnimatedTilemapProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes an [AnimatedTilemap](../../../../Tilemaps/AnimatedTilemap/) from the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static AnimatedTilemap Process(GraphicsDevice device, AsepriteFile aseFile, bool onlyVisibleLayers = true);
```

## Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) to processed the [AnimatedTilemap](../../../../Tilemaps/AnimatedTilemap/) from.

`onlyVisibleLayers`  bool

Indicates if only layers that are visible should be processed.

## Remarks

When using this processor, all [AsepriteFrame](../../../../AsepriteTypes/AsepriteFrame/) elements from the[AsepriteFile](../../../../AsepriteFile/) are processed. [AsepriteTag](../../../../AsepriteTypes/AsepriteTag/) elements are ignored at this time (though may be implemented to support tags in the future).  Only [AsepriteTilemapCel](../../../../AsepriteTypes/AsepriteTilemapCel/) elements in each frame are processed to generate the tile data.

## Returns

[AnimatedTilemap](../../../../Tilemaps/AnimatedTilemap/)

The [AnimatedTilemap](../../../../Tilemaps/AnimatedTilemap/) created by this method.

## Exceptions

InvalidOperationException

Thrown if layers are found in the [AsepriteFile](../../../../AsepriteFile/) with duplicate names.  Tilemaps must contain  layers with unique names even though Aseprite does not enforce unique names for layers.

## See Also

- [AnimatedTilemap](../../../../Tilemaps/AnimatedTilemap/)
- [AsepriteFile](../../../../AsepriteFile/)


