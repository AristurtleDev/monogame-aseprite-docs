---

title: AnimatedTilemap.GetFrame Method
sidebar_label: GetFrame
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Gets the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element at the specified index in this [AnimatedTilemap](../).

```csharp
public AnimatedTilemapFrame GetFrame(int frameIndex);
```

## Parameters

`frameIndex`  int

The index of the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element to locate.

## Returns

[AnimatedTilemapFrame](../../AnimatedTilemapFrame/)

The [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element that was located.

## Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) elements in this [AnimatedTilemap](../).


