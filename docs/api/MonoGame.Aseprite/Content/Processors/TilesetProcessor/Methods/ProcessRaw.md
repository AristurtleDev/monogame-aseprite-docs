---

title: TilesetProcessor.ProcessRaw Method
sidebar_label: ProcessRaw
---
**Declaring Type:** [TilesetProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                          | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ProcessRaw(AsepriteFile, int)](#processrawasepritefile-int)       | Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) at the specified index in the given [AsepriteFile](../../../../AsepriteFile/).   |
| [ProcessRaw(AsepriteFile, string)](#processrawasepritefile-string) | Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) with the specified name in the  given [AsepriteFile](../../../../AsepriteFile/). |
| [ProcessRaw(AsepriteTileset)](#processrawasepritetileset)          | Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the given [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/).                                                                                   |

## ProcessRaw(AsepriteFile, int)

Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) at the specified index in the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static RawTileset ProcessRaw(AsepriteFile aseFile, int tilesetIndex);
```

### Parameters

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to process.

`tilesetIndex`  int

The index of the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) in the [AsepriteFile](../../../../AsepriteFile/) to process.

### Returns

[RawTileset](../../../../RawTypes/RawTileset/)

The [RawTileset](../../../../RawTypes/RawTileset/) created by this method.

### Exceptions

ArgumentOutOfRangeException

Thrown if the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) index specified is less than zero or is greater than or equal to the total number of [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) elements in the given [AsepriteFile](../../../../AsepriteFile/).

## ProcessRaw(AsepriteFile, string)

Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) with the specified name in the  given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static RawTileset ProcessRaw(AsepriteFile aseFile, string tilesetName);
```

### Parameters

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to process.

`tilesetName`  string

The name of the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) in the [AsepriteFile](../../../../AsepriteFile/) to process.

### Returns

[RawTileset](../../../../RawTypes/RawTileset/)

The [RawTileset](../../../../RawTypes/RawTileset/) created by this method.

### Exceptions

InvalidOperationException

Thrown if the given [AsepriteFile](../../../../AsepriteFile/) does not contain an [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) element  with the specified name.

## ProcessRaw(AsepriteTileset)

Processes a [RawTileset](../../../../RawTypes/RawTileset/) from the given [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/).

```csharp
public static RawTileset ProcessRaw(AsepriteTileset aseTileset);
```

### Parameters

`aseTileset`  [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/)

The [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to process.

### Returns

[RawTileset](../../../../RawTypes/RawTileset/)

The [RawTileset](../../../../RawTypes/RawTileset/) created by this method.


