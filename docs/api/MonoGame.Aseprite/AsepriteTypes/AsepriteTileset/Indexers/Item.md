---
title: AsepriteTileset.Item Indexer
sidebar_label: Item Indexer

---

**Declaring Type:** [AsepriteTileset](../)  
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../../)  
**Assembly:** MonoGame.Aseprite

Gets a read\-only span of the color values that represent the pixel data for a the tile at the specified  index in this [AsepriteTileset](../).  Pixel order is from top\-to\-bottom, read left\-to\-right.

```csharp
public ReadOnlySpan<Color> this [int tileIndex] { get; }
```

## Parameters

`tileIndex`  int

The index of the tile in this [AsepriteTileset](../) to get the pixel data for.

## Indexer Value

ReadOnlySpan\<Color\>

## Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of  tiles in this [AsepriteTileset](../).

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
