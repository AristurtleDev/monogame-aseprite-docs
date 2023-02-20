---

title: AnimatedTilemapFrame.CreateLayer Method
sidebar_label: CreateLayer
---
**Declaring Type:** [AnimatedTilemapFrame](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Creates a new [TilemapLayer](../../TilemapLayer/) element and adds it to this [AnimatedTilemapFrame](../).

```csharp
public TilemapLayer CreateLayer(string layerName, Tileset tileset, int columns, int rows, Vector2 offset);
```

## Parameters

`layerName`  string

The name to assign the [TilemapLayer](../../TilemapLayer/) element created by this method. The name must be unique  across all [TilemapLayer](../../TilemapLayer/) elements in this [AnimatedTilemapFrame](../).

`tileset`  [Tileset](../../Tileset/)

The source [Tileset](../../Tileset/) to assign the [TilemapLayer](../../TilemapLayer/) element created by this method.

`columns`  int

The total number of columns to assign the [TilemapLayer](../../TilemapLayer/) element created by this method. 

`rows`  int

The total of rows in the [TilemapLayer](../../TilemapLayer/) element created by this method.

`offset`  Vector2

The x\- and y\-position offset, relative to the location the [AnimatedTilemap](../../AnimatedTilemap/) is rendered, to  assign the [TilemapLayer](../../TilemapLayer/) element created by this method.

## Returns

[TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/)  created by this method.

## Exceptions

InvalidOperationException

Thrown if this [AnimatedTilemapFrame](../) already contains a [TilemapLayer](../../TilemapLayer/) element with the specified name.


