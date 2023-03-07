---
title: TilemapLayer.SetTile Method
sidebar_label: SetTile

---

**Declaring Type:** [TilemapLayer](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                                        | Description                                                                                                                                         |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SetTile(Point, Tile)](#settilepoint-tile)                                       | Sets the specified column and row location in this [TilemapLayer](../) to the [Tile](../../Tile/)element given.                     |
| [SetTile(Point, int, bool, bool, float)](#settilepoint-int-bool-bool-float)      | Sets the [Tile](../../Tile/) element at the specified column and row location in this [TilemapLayer](../)using the values provided. |
| [SetTile(int, Tile)](#settileint-tile)                                           | Sets the specified index in this [TilemapLayer](../) to the [Tile](../../Tile/) element given.                                      |
| [SetTile(int, int, Tile)](#settileint-int-tile)                                  | Sets the specified column and row in this [TilemapLayer](../) to the [Tile](../../Tile/) element  given.                            |
| [SetTile(int, int, bool, bool, float)](#settileint-int-bool-bool-float)          | Sets the [Tile](../../Tile/) element at the specified index in this [TilemapLayer](../) using the  values provided.                 |
| [SetTile(int, int, int, bool, bool, float)](#settileint-int-int-bool-bool-float) | Sets the [Tile](../../Tile/) element at the specified column and row in this [TilemapLayer](../)using the values provided.          |

## SetTile(Point, Tile)

Sets the specified column and row location in this [TilemapLayer](../) to the [Tile](../../Tile/)element given.

```csharp
public void SetTile(Point location, Tile tile);
```

### Parameters

`location`  Point

The column and row location in this [TilemapLayer](../) to set.

`tile`  [Tile](../../Tile/)

The [Tile](../../Tile/) element to set at the column and row location.

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or row in the specified location are less than zero or are greater than or equal to the total  number of columns or rows in this [TilemapLayer](../).

## SetTile(Point, int, bool, bool, float)

Sets the [Tile](../../Tile/) element at the specified column and row location in this [TilemapLayer](../)using the values provided.

```csharp
public void SetTile(Point location, int tilesetTileID, bool flipHorizontally = false, bool flipVertically = false, float rotation = 0f);
```

### Parameters

`location`  Point

The column and row location in this [TilemapLayer](../) to set the [Tile](../../Tile/) element at.

`tilesetTileID`  int

The ID of the source tile in the [Tileset](../Properties/Tileset.md) that represents the [TextureRegion](../../../TextureRegion/) to  render for the [Tile](../../Tile/) element being set.

`flipHorizontally`  bool

Indicates whether the [Tile](../../Tile/) element being set should be flipped horizontally when rendered.

`flipVertically`  bool

Indicates if the [Tile](../../Tile/) element being set should be flipped vertically when rendered.

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [Tile](../../Tile/) element being set.

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or row in the specified location is less than zero or are greater than or equal  to the total number of columns or rows in this [TilemapLayer](../).

## SetTile(int, Tile)

Sets the specified index in this [TilemapLayer](../) to the [Tile](../../Tile/) element given.

```csharp
public void SetTile(int index, Tile tile);
```

### Parameters

`index`  int

The index in this [TilemapLayer](../) to set.

`tile`  [Tile](../../Tile/)

The [Tile](../../Tile/) element to set at the index.

### Exceptions

ArgumentOutOfRangeException

Thrown if the index specified is less than zero or is greater than or equal to the total number of [Tile](../../Tile/) elements in this [TilemapLayer](../).

## SetTile(int, int, Tile)

Sets the specified column and row in this [TilemapLayer](../) to the [Tile](../../Tile/) element  given.

```csharp
public void SetTile(int column, int row, Tile tile);
```

### Parameters

`column`  int

The column in this [TilemapLayer](../) to set.

`row`  int

The row in this [TilemapLayer](../) to set.

`tile`  [Tile](../../Tile/)

The [Tile](../../Tile/) element to set at the column and row.

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or row specified are less than zero or are greater than or equal to the total  number of columns or rows in this [TilemapLayer](../).

## SetTile(int, int, bool, bool, float)

Sets the [Tile](../../Tile/) element at the specified index in this [TilemapLayer](../) using the  values provided.

```csharp
public void SetTile(int index, int tilesetTileID, bool flipHorizontally = false, bool flipVertically = false, float rotation = 0f);
```

### Parameters

`index`  int

The index of the [Tile](../../Tile/) element in this [TilemapLayer](../) to set.

`tilesetTileID`  int

The ID of the source tile in the [Tileset](../Properties/Tileset.md) that represents the [TextureRegion](../../../TextureRegion/) to  render for the [Tile](../../Tile/) element being set.

`flipHorizontally`  bool

Indicates whether the [Tile](../../Tile/) element being set should be flipped horizontally when rendered.

`flipVertically`  bool

Indicates if the [Tile](../../Tile/) element being set should be flipped vertically when rendered.

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [Tile](../../Tile/) element being set.

### Exceptions

ArgumentOutOfRangeException

Thrown if the index specified is less than zero or is greater than or equal to the total number of [Tile](../../Tile/) elements in this [TilemapLayer](../).

## SetTile(int, int, int, bool, bool, float)

Sets the [Tile](../../Tile/) element at the specified column and row in this [TilemapLayer](../)using the values provided.

```csharp
public void SetTile(int column, int row, int tilesetTileID, bool flipHorizontally = false, bool flipVertically = false, float rotation = 0f);
```

### Parameters

`column`  int

The column in this [TilemapLayer](../) to set the [Tile](../../Tile/) element at.

`row`  int

The row in this [TilemapLayer](../) to set the [Tile](../../Tile/) element at.

`tilesetTileID`  int

The ID of the source tile in the [Tileset](../Properties/Tileset.md) that represents the [TextureRegion](../../../TextureRegion/) to  render for the [Tile](../../Tile/) element being set.

`flipHorizontally`  bool

Indicates whether the [Tile](../../Tile/) element being set should be flipped horizontally when rendered.

`flipVertically`  bool

Indicates if the [Tile](../../Tile/) element being set should be flipped vertically when rendered.

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [Tile](../../Tile/) element being set.

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or row  specified is less than zero or are greater than or equal to the total  number of columns or rows in this [TilemapLayer](../).

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
