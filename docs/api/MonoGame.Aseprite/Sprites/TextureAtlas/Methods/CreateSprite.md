---

title: TextureAtlas.CreateSprite Method
sidebar_label: CreateSprite
---
**Declaring Type:** [TextureAtlas](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                  | Description                                                                                                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CreateSprite(int)](#createspriteint)                      | Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) at the specified index in this[TextureAtlas](../).   |
| [CreateSprite(string)](#createspritestring)                | Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) with the specified name in this[TextureAtlas](../).  |
| [CreateSprite(string, int)](#createspritestring-int)       | Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) at the specified index in this[TextureAtlas](../).   |
| [CreateSprite(string, string)](#createspritestring-string) | Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/)  with the specified name in this[TextureAtlas](../). |

## CreateSprite(int)

Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) at the specified index in this[TextureAtlas](../).

```csharp
public Sprite CreateSprite(int regionIndex);
```

### Parameters

`regionIndex`  int

The index of the [TextureRegion](../../../TextureRegion/) element to assign the [Sprite](../../Sprite/) that is created.

### Returns

[Sprite](../../Sprite/)

The [Sprite](../../Sprite/) that is created by this method.

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of[TextureRegion](../../../TextureRegion/) elements in this [TextureAtlas](../).

## CreateSprite(string)

Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) with the specified name in this[TextureAtlas](../).

```csharp
public Sprite CreateSprite(string regionName);
```

### Parameters

`regionName`  string

The name of the [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../) assign the [Sprite](../../Sprite/) that is created.

### Returns

[Sprite](../../Sprite/)

The [Sprite](../../Sprite/) that is created by this method.

### Exceptions

KeyNotFoundException

Thrown if this [TextureAtlas](../) does not contain a [TextureRegion](../../../TextureRegion/) with the name  specified.

## CreateSprite(string, int)

Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/) at the specified index in this[TextureAtlas](../).

```csharp
public Sprite CreateSprite(string spriteName, int regionIndex);
```

### Parameters

`spriteName`  string

The name to assign the [Sprite](../../Sprite/) that is created.

`regionIndex`  int

The index of the [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../) assign the [Sprite](../../Sprite/) that is created.

### Returns

[Sprite](../../Sprite/)

The [Sprite](../../Sprite/) that is created by this method.

### Exceptions

ArgumentOutOfRangeException

Thrown if the specified index is less than zero or is greater than or equal to the total number of[TextureRegion](../../../TextureRegion/) elements in this [TextureAtlas](../).

## CreateSprite(string, string)

Creates a new [Sprite](../../Sprite/) from the [TextureRegion](../../../TextureRegion/)  with the specified name in this[TextureAtlas](../).

```csharp
public Sprite CreateSprite(string spriteName, string regionName);
```

### Parameters

`spriteName`  string

The name to assign the [Sprite](../../Sprite/) that is created.

`regionName`  string

The name of the [TextureRegion](../../../TextureRegion/) element in this [TextureAtlas](../) assign the [Sprite](../../Sprite/) that is created.

### Returns

[Sprite](../../Sprite/)

The [Sprite](../../Sprite/) that is created by this method.

### Exceptions

KeyNotFoundException

Thrown if this [TextureAtlas](../) does not contain a [TextureRegion](../../../TextureRegion/) with the name  specified.


