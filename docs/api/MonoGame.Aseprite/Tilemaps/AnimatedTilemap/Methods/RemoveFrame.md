---

title: AnimatedTilemap.RemoveFrame Method
sidebar_label: RemoveFrame
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Removes the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element at the specified index from this [AnimatedTilemap](../).

```csharp
public bool RemoveFrame(int index);
```

## Parameters

`index`  int

The index of the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) element to remove.

## Returns

bool

 if the [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) was removed successfully; otherwise, .  This method returns  when the specified index is less than                  zero or is greater that or equal to the total number of [AnimatedTilemapFrame](../../AnimatedTilemapFrame/) elements in this [AnimatedTilemap](../).


