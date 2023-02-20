---

title: TextureAtlas.GetRegion Method
sidebar_label: GetRegion
---
**Declaring Type:** [TextureAtlas](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                             | Description                                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [GetRegion(int)](#getregionint)       | Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).  |
| [GetRegion(string)](#getregionstring) | Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../). |

## GetRegion(int)

Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).

```csharp
public TextureRegion GetRegion(int index);
```

### Parameters

`index`  int

The index of the [TextureRegion](../../../TextureRegion/) element to locate.

### Returns

[TextureRegion](../../../TextureRegion/)

The [TextureRegion](../../../TextureRegion/) element that was located.

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of[TextureRegion](../../../TextureRegion/) elements in this [TextureAtlas](../).

## GetRegion(string)

Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../).

```csharp
public TextureRegion GetRegion(string name);
```

### Parameters

`name`  string

The name of the [TextureRegion](../../../TextureRegion/) element to locate.

### Returns

[TextureRegion](../../../TextureRegion/)

The [TextureRegion](../../../TextureRegion/) element that was located.

### Exceptions

KeyNotFoundException

Thrown if this [TextureAtlas](../) does not contain a [TextureRegion](../../../TextureRegion/) element with the  specified name.


