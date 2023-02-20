---

title: AnimatedTilemapFrame.RemoveLayer Method
sidebar_label: RemoveLayer
---
**Declaring Type:** [AnimatedTilemapFrame](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                             | Description                                                                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [RemoveLayer(TilemapLayer)](#removelayertilemaplayer) | Removes the given [TilemapLayer](../../TilemapLayer/) element from this [AnimatedTilemapFrame](../).                   |
| [RemoveLayer(int)](#removelayerint)                   | Removes the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [AnimatedTilemapFrame](../).    |
| [RemoveLayer(string)](#removelayerstring)             | Removes the [TilemapLayer](../../TilemapLayer/) element with the specified name from this [AnimatedTilemapFrame](../). |

## RemoveLayer(TilemapLayer)

Removes the given [TilemapLayer](../../TilemapLayer/) element from this [AnimatedTilemapFrame](../).

```csharp
public bool RemoveLayer(TilemapLayer layer);
```

### Parameters

`layer`  [TilemapLayer](../../TilemapLayer/)

The [TilemapLayer](../../TilemapLayer/) element to remove from this [AnimatedTilemapFrame](../).

### Returns

bool

 if the [TilemapLayer](../../TilemapLayer/) element was removed successfully; otherwise, .  This method returns  if this tilemap frame does not contain                 the [TilemapLayer](../../TilemapLayer/) element given.

## RemoveLayer(int)

Removes the [TilemapLayer](../../TilemapLayer/) element at the specified index in this [AnimatedTilemapFrame](../).

```csharp
public bool RemoveLayer(int index);
```

### Parameters

`index`  int

The index of the [TilemapLayer](../../TilemapLayer/) element to remove from this [AnimatedTilemapFrame](../).

### Returns

bool

 if the [TilemapLayer](../../TilemapLayer/) element was successfully removed; otherwise, .  This method returns  if the specified index is less than                  zero or is greater than or equal to the total number of [TilemapLayer](../../TilemapLayer/) elements in this tilemap                 frame.

## RemoveLayer(string)

Removes the [TilemapLayer](../../TilemapLayer/) element with the specified name from this [AnimatedTilemapFrame](../).

```csharp
public bool RemoveLayer(string name);
```

### Parameters

`name`  string

The name of the [TilemapLayer](../../TilemapLayer/) element to remove from this [AnimatedTilemapFrame](../)

### Returns

bool

 if the [TilemapLayer](../../TilemapLayer/) element was successfully removed; otherwise, .  This method returns  if this tilemap frame does not                  contain a [TilemapLayer](../../TilemapLayer/) element with the specified name.


