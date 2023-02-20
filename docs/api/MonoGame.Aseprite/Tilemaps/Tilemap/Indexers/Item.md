---

title: Tilemap.Item Indexer
sidebar_label: Item Indexer
---
**Declaring Type:** [Tilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                     | Description                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Item\[int\]](#itemint)       | Gets the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [Tilemap](../).  |
| [Item\[string\]](#itemstring) | Gets the [TilemapLayer](../../TilemapLayer/) element with the specified name in this [Tilemap](../). |

## Item\[int\]

Gets the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [Tilemap](../).

```csharp
public TilemapLayer this[int layerIndex] { get; }
```

### Parameters

`layerIndex`  int

The index of the [TilemapLayer](../../TilemapLayer/) element to locate.

### Indexer Value

[TilemapLayer](../../TilemapLayer/)

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of [TilemapLayer](../../TilemapLayer/) elements in this [Tilemap](../).

## Item\[string\]

Gets the [TilemapLayer](../../TilemapLayer/) element with the specified name in this [Tilemap](../).

```csharp
public TilemapLayer this[string layerName] { get; }
```

### Parameters

`layerName`  string

The name of the [TilemapLayer](../../TilemapLayer/) element to locate.

### Indexer Value

[TilemapLayer](../../TilemapLayer/)

### Exceptions

KeyNotFoundException

Thrown if this [Tilemap](../) does not contain a [TilemapLayer](../../TilemapLayer/) element with the  specified name.


