---

title: TextureRegion.CreateSlice Method
sidebar_label: CreateSlice
---
**Declaring Type:** [TextureRegion](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

Creates and adds a new [Slice](../../Slice/) element to this [TextureRegion](../).

```csharp
public Slice CreateSlice(string name, Rectangle bounds, Vector2 origin, Color color);
```

## Parameters

`name`  string

The name to assign the [Slice](../../Slice/) that is created by this method.  The name must be unique across all [Slice](../../Slice/) elements in this [TextureRegion](../).

`bounds`  Rectangle

The bounds to assign the [Slice](../../Slice/) created by this method.  This should be relative to the bounds of this [TextureRegion](../).

`origin`  Vector2

The x\- and y\-coordinate origin point to assign the [Slice](../../Slice/) created by this method. This should be relative to the upper\-left corner of the bounds of this [TextureRegion](../).

`color`  Color

A Color value to assign the [Slice](../../Slice/) created by this method.

## Returns

[Slice](../../Slice/)

The [Slice](../../Slice/) created by this method.

## Exceptions

InvalidOperationException

Thrown if this [TextureRegion](../) already contains a [Slice](../../Slice/) with the specified name.


