---

title: TilemapProcessor.Process Method
sidebar_label: Process
---
**Declaring Type:** [TilemapProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

Processes a [Tilemap](../../../../Tilemaps/Tilemap/) from the [AsepriteFile](../../../../AsepriteFile/) at the specified index in the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static Tilemap Process(GraphicsDevice device, AsepriteFile aseFile, int frameIndex, bool onlyVisibleLayers = true);
```

## Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the animated [Tilemap](../../../../Tilemaps/Tilemap/) to process.

`frameIndex`  int

The index of the [AsepriteFile](../../../../AsepriteFile/) element in the [AsepriteFile](../../../../AsepriteFile/) to process.

`onlyVisibleLayers`  bool

Indicates if only [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements that are visible should be processed.

## Returns

[Tilemap](../../../../Tilemaps/Tilemap/)

The [Tilemap](../../../../Tilemaps/Tilemap/) created by this method.

## Exceptions

ArgumentOutOfRangeException

Thrown if the frame index specified is less than zero or is greater than or equal to the total number of [AsepriteFile](../../../../AsepriteFile/) elements in the given [AsepriteFile](../../../../AsepriteFile/).

InvalidOperationException

Thrown if [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements are found in the [AsepriteFile](../../../../AsepriteFile/) with duplicate  names.  A [Tilemap](../../../../Tilemaps/Tilemap/) must contain layers with unique names even though aseprite does not enforce unique names for [AsepriteLayer](../../../../AsepriteTypes/AsepriteLayer/) elements.

## See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [Tilemap](../../../../Tilemaps/Tilemap/)


