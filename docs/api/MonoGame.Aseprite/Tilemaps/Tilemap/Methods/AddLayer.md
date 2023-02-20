---

title: Tilemap.AddLayer Method
sidebar_label: AddLayer
---
**Declaring Type:** [Tilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Adds the given [TilemapLayer](../../TilemapLayer/) element to this [Tilemap](../).

```csharp
public void AddLayer(TilemapLayer layer);
```

## Parameters

`layer`  [TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/) element to add.

## Exceptions

InvalidOperationException

Thrown if this [Tilemap](../) already contains a [TilemapLayer](../../TilemapLayer/) element with the same  name as the [TilemapLayer](../../TilemapLayer/) element given.


