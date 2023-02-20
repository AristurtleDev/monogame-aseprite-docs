---

title: AsepriteFile.GetTag Method
sidebar_label: GetTag
---
**Declaring Type:** [AsepriteFile](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                       | Description                                                                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [GetTag(int)](#gettagint)       | Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element at the specified index in this [AsepriteFile](../).    |
| [GetTag(string)](#gettagstring) | Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the specified name from this [AsepriteFile](../). |

## GetTag(int)

Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element at the specified index in this [AsepriteFile](../).

```csharp
public AsepriteTag GetTag(int tagIndex);
```

### Parameters

`tagIndex`  int

The index of the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element to locate.

### Returns

[AsepriteTag](../../AsepriteTypes/AsepriteTag/)

The [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element located.

### Exceptions

ArgumentOutOfRangeException

Thrown if the index specified is less than zero or is greater than or equal to the total number of [AsepriteTag](../../AsepriteTypes/AsepriteTag/) elements in this [AsepriteFile](../).

## GetTag(string)

Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the specified name from this [AsepriteFile](../).

```csharp
public AsepriteTag GetTag(string tagName);
```

### Parameters

`tagName`  string

The name of the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element to locate.

### Returns

[AsepriteTag](../../AsepriteTypes/AsepriteTag/)

The [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element located.

### Exceptions

InvalidOperationException

Thrown if this [AsepriteFile](../) does not contain an [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the  specified name.


