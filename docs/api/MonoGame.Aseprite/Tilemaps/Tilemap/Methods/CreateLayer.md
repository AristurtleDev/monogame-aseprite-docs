---

title: Tilemap.CreateLayer Method
sidebar_label: CreateLayer
---
**Declaring Type:** [Tilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Creates a new [TilemapLayer](../../TilemapLayer/) element and adds it to this [Tilemap](../).

```csharp
public TilemapLayer CreateLayer(string layerName, Tileset tileset, int columns, int rows, Vector2 offset);
```

## Parameters

`layerName`  string

The name to give the [TilemapLayer](../../TilemapLayer/) element created by this method. The name must be unique across all [TilemapLayer](../../TilemapLayer/) elements in this [Tilemap](../).

`tileset`  [Tileset](../../Tileset/)

The source tileset to assign the [TilemapLayer](../../TilemapLayer/) element created by this method.

`columns`  int

The total number of columns to assign the [TilemapLayer](../../TilemapLayer/) element created by this method. 

`rows`  int

The total of rows to assign the [TilemapLayer](../../TilemapLayer/) element created by this method.

`offset`  Vector2

The x\- and y\-position offset, relative to the location the [Tilemap](../) is rendered, to  assign the [TilemapLayer](../../TilemapLayer/) element created by this method.

## Returns

[TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/) created by this method.

## Exceptions

InvalidOperationException

Thrown if this [Tilemap](../) already contains a [TilemapLayer](../../TilemapLayer/) element with the  specified name.


