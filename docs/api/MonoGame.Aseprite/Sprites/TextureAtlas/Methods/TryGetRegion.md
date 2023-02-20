---

title: TextureAtlas.TryGetRegion Method
sidebar_label: TryGetRegion
---
**Declaring Type:** [TextureAtlas](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                                | Description                                                                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| [TryGetRegion(int, TextureRegion)](#trygetregionint-textureregion)       | Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).  |
| [TryGetRegion(string, TextureRegion)](#trygetregionstring-textureregion) | Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../). |

## TryGetRegion(int, TextureRegion)

Gets the [TextureRegion](../../../TextureRegion/) element at the specified index in this [TextureAtlas](../).

```csharp
public bool TryGetRegion(int index, [NotNullWhen(true)]out TextureRegion region);
```

### Parameters

`index`  int

The index of the [TextureRegion](../../../TextureRegion/) element to locate.

`region`  TextureRegion

When this method returns , contains the [TextureRegion](../../../TextureRegion/) located;  otherwise, .

### Returns

bool

 if a [TextureRegion](../../../TextureRegion/) element was located; otherwise, .  This method returns  if the index specified is less than                  zero or is greater than or equal to the total number of [TextureRegion](../../../TextureRegion/) elements in this [TextureAtlas](../).

## TryGetRegion(string, TextureRegion)

Gets the [TextureRegion](../../../TextureRegion/) element with the specified name in this [TextureAtlas](../).

```csharp
public bool TryGetRegion(string name, [NotNullWhen(true)]out TextureRegion region);
```

### Parameters

`name`  string

The name of the [TextureRegion](../../../TextureRegion/) element to locate.

`region`  TextureRegion

When this method returns , contains the [TextureRegion](../../../TextureRegion/) located;  otherwise, .

### Returns

bool

 if a [TextureRegion](../../../TextureRegion/) element was located; otherwise, .  This method returns  if this [TextureAtlas](../)                does not contain a [TextureRegion](../../../TextureRegion/) element with the specified name.


