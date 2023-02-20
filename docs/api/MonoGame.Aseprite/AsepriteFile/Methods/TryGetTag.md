---

title: AsepriteFile.TryGetTag Method
sidebar_label: TryGetTag
---
**Declaring Type:** [AsepriteFile](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                      | Description                                                                                                                             |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [TryGetTag(int, AsepriteTag)](#trygettagint-asepritetag)       | Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element at the specified index from this [AsepriteFile](../).  |
| [TryGetTag(string, AsepriteTag)](#trygettagstring-asepritetag) | Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the specified name from this [AsepriteFile](../). |

## TryGetTag(int, AsepriteTag)

Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element at the specified index from this [AsepriteFile](../).

```csharp
public bool TryGetTag(int tagIndex, [NotNullWhen(true)]out AsepriteTag located);
```

### Parameters

`tagIndex`  int

The index of the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element to locate

`located`  AsepriteTag

When this method returns , contains the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element located; otherwise, .

### Returns

bool

 if the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element was located; otherwise, .  This method returns  if this index specified is less than                  zero or is greater than or equal to the total number of [AsepriteTag](../../AsepriteTypes/AsepriteTag/) elements in this[AsepriteFile](../).

## TryGetTag(string, AsepriteTag)

Gets the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the specified name from this [AsepriteFile](../).

```csharp
public bool TryGetTag(string tagName, [NotNullWhen(true)]out AsepriteTag located);
```

### Parameters

`tagName`  string

The name of the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element to locate.

`located`  AsepriteTag

When this method returns , contains the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element located;  otherwise, .

### Returns

bool

 if the [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element was located; otherwise, .  This method returns  if this [AsepriteFile](../)                does not contain an [AsepriteTag](../../AsepriteTypes/AsepriteTag/) element with the specified name.


