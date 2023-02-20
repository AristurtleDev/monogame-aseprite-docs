---

title: AnimatedTilemapFrame.GetLayer Method
sidebar_label: GetLayer
---
**Declaring Type:** [AnimatedTilemapFrame](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                           | Description                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [GetLayer(int)](#getlayerint)       | Gets the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [AnimatedTilemapFrame](../).  |
| [GetLayer(string)](#getlayerstring) | Gets the [TilemapLayer](../../TilemapLayer/) element with the specified name in this [AnimatedTilemapFrame](../). |

## GetLayer(int)

Gets the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [AnimatedTilemapFrame](../).

```csharp
public TilemapLayer GetLayer(int index);
```

### Parameters

`index`  int

The index of the [TilemapLayer](../../TilemapLayer/) element to locate.

### Returns

[TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/) element located.

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of[TilemapLayer](../../TilemapLayer/) elements in this [AnimatedTilemapFrame](../).

## GetLayer(string)

Gets the [TilemapLayer](../../TilemapLayer/) element with the specified name in this [AnimatedTilemapFrame](../).

```csharp
public TilemapLayer GetLayer(string name);
```

### Parameters

`name`  string

The name of the [TilemapLayer](../../TilemapLayer/) element to locate.

### Returns

[TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/) element located.

### Exceptions

KeyNotFoundException

Thrown if this [AnimatedTilemapFrame](../) does not contain a [TilemapLayer](../../TilemapLayer/) element with the specified name.


