---
title: TilemapLayer.Item Indexer
sidebar_label: Item Indexer

---

**Declaring Type:** [TilemapLayer](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                        | Description                                                                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Item\[Point\]](#itempoint)      | Gets the [Tile](../../Tile/) element located at the specified column and row location in this [TilemapLayer](../). |
| [Item\[int, int\]](#itemint-int) | Gets the [Tile](../../Tile/) element located at the specified column and row in this [TilemapLayer](../).          |
| [Item\[int\]](#itemint)          | Gets the [Tile](../../Tile/) element at the specified index in this [TilemapLayer](../)                            |

## Item\[Point\]

Gets the [Tile](../../Tile/) element located at the specified column and row location in this [TilemapLayer](../).

```csharp
public Tile this [Point location] { get; }
```

### Parameters

`location`  Point

The column and row location of the [Tile](../../Tile/) element to locate.

### Indexer Value

[Tile](../../Tile/)

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or rows specified in the location is less than zero or if either is greater than or equal to the total number of columns or rows in this [TilemapLayer](../).

## Item\[int, int\]

Gets the [Tile](../../Tile/) element located at the specified column and row in this [TilemapLayer](../).

```csharp
public Tile this [int column, int row] { get; }
```

### Parameters

`column`  int

The column of the [Tile](../../Tile/) element to locate.

`row`  int

The row of the [Tile](../../Tile/) element to locate.

### Indexer Value

[Tile](../../Tile/)

### Exceptions

ArgumentOutOfRangeException

Thrown if either the column or rows specified is less than zero or if either is greater than or equal to the total number of columns or rows in this [TilemapLayer](../).

## Item\[int\]

Gets the [Tile](../../Tile/) element at the specified index in this [TilemapLayer](../)

```csharp
public Tile this [int tileIndex] { get; }
```

### Parameters

`tileIndex`  int

The index of the [Tile](../../Tile/) element to locate.

### Indexer Value

[Tile](../../Tile/)

### Exceptions

ArgumentOutOfRangeException

Thrown if the index specified is less than zero or is greater than or equal to the total number of [Tile](../../Tile/) elements in this [TilemapLayer](../).

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
