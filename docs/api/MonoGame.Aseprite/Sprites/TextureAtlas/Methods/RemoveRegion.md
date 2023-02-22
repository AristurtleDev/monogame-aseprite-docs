---
title: TextureAtlas.RemoveRegion Method
sidebar_label: RemoveRegion

---

**Declaring Type:** [TextureAtlas](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                   | Description                                                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [RemoveRegion(int)](#removeregionint)       | Removes the [TextureRegion](../../../TextureRegion/) element at the specified index from this [TextureAtlas](../).  |
| [RemoveRegion(string)](#removeregionstring) | Removes the [TextureRegion](../../../TextureRegion/) element with the specified name from this [TextureAtlas](../). |

## RemoveRegion(int)

Removes the [TextureRegion](../../../TextureRegion/) element at the specified index from this [TextureAtlas](../).

```csharp
public bool RemoveRegion(int index);
```

### Parameters

`index`  int

The index of the [TextureRegion](../../../TextureRegion/) element to remove.

### Returns

bool

 if the [TextureRegion](../../../TextureRegion/) element was successfully removed; otherwise, .  This method returns  if the specified index is less than                 zero or is greater than or equal to the total number of [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../).

## RemoveRegion(string)

Removes the [TextureRegion](../../../TextureRegion/) element with the specified name from this [TextureAtlas](../).

```csharp
public bool RemoveRegion(string name);
```

### Parameters

`name`  string

The name of the [TextureRegion](../../../TextureRegion/) element to remove.

### Returns

bool

 if the [TextureRegion](../../../TextureRegion/) element was successfully removed; otherwise, .  This method returns  if this [TextureAtlas](../)                does not contain a [TextureRegion](../../../TextureRegion/) element with the specified name.

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*