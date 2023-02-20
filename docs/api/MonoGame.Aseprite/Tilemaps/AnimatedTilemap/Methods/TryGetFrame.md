---

title: AnimatedTilemap.TryGetFrame Method
sidebar_label: TryGetFrame
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Gets the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element at the specified index in this [AnimatedTilemap](../).

```csharp
public bool TryGetFrame(int index, out AnimatedTilemapFrame frame);
```

## Parameters

`index`  int

The index of the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element to locate.

`frame`  AnimatedTilemapFrame

When this method returns , contains the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) located;                otherwise, .

## Returns

bool

 if the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element was located; otherwise, .  This method returns  when the specified index is less than                 zero or is greater than or equal to the total number of [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) elements in this [AnimatedTilemap](../).


