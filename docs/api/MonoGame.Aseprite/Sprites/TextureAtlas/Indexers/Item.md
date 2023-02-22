---
title: TextureAtlas.Item Indexer
sidebar_label: Item Indexer

---

**Declaring Type:** [TextureAtlas](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                     | Description                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Item\[int\]](#itemint)       | Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).  |
| [Item\[string\]](#itemstring) | Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../). |

## Item\[int\]

Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).

```csharp
public TextureRegion this [int index] { get; }
```

### Parameters

`index`  int

The index of the [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../) to locate.

### Indexer Value

[TextureRegion](../../../TextureRegion/)

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of [TextureRegion](../../../TextureRegion/) elements in this [TextureAtlas](../).

## Item\[string\]

Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../).

```csharp
public TextureRegion this [string name] { get; }
```

### Parameters

`name`  string

The name of the [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../) to locate.

### Indexer Value

[TextureRegion](../../../TextureRegion/)

### Exceptions

KeyNotFoundException

Thrown if this [TextureAtlas](../) does not contain a [TextureRegion](../../../TextureRegion/) with the specified  name.

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*