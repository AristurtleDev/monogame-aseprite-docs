---

title: AnimationTag.Item Indexer
sidebar_label: Item Indexer
---
**Declaring Type:** [AnimationTag](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

Gets the [AnimationFrame](../../AnimationFrame/) element at the specified index from this [AnimationTag](../).

```csharp
public AnimationFrame this[int index] { get; }
```

## Parameters

`index`  int

The index of the [AnimationFrame](../../AnimationFrame/) to locate.

## Indexer Value

[AnimationFrame](../../AnimationFrame/)

## Exceptions

ArgumentOutOfRangeException

Thrown if the specified `index` is less than zero or is greater than or equal to the total number of [AnimationFrame](../../AnimationFrame/) elements in this [AnimationTag](../).


