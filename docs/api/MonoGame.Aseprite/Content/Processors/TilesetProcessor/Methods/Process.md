---
title: TilesetProcessor.Process Method
sidebar_label: Process

---

**Declaring Type:** [TilesetProcessor](../)  
**Namespace:** [MonoGame.Aseprite.Content.Processors](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                                                   | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Process(GraphicsDevice, AsepriteFile, int)](#processgraphicsdevice-asepritefile-int)       | Processes a [Tileset](../../../../Tilemaps/Tileset/) from the [AsepriteTile](../../../../AsepriteTypes/AsepriteTile/) element at the specified index in the given [AsepriteFile](../../../../AsepriteFile/). |
| [Process(GraphicsDevice, AsepriteFile, string)](#processgraphicsdevice-asepritefile-string) | Processes a [Tileset](../../../../Tilemaps/Tileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) with the specified name in the  given [AsepriteFile](../../../../AsepriteFile/). |
| [Process(GraphicsDevice, AsepriteTileset)](#processgraphicsdevice-asepritetileset)          | Processes a [Tileset](../../../../Tilemaps/Tileset/) from an [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/).                                                                                          |

## Process(GraphicsDevice, AsepriteFile, int)

Processes a [Tileset](../../../../Tilemaps/Tileset/) from the [AsepriteTile](../../../../AsepriteTypes/AsepriteTile/) element at the specified index in the given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static Tileset Process(GraphicsDevice device, AsepriteFile aseFile, int tilesetIndex);
```

### Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to processes.

`tilesetIndex`  int

The index of the [AsepriteTile](../../../../AsepriteTypes/AsepriteTile/) element in the [AsepriteFile](../../../../AsepriteFile/) to processes.

### Returns

[Tileset](../../../../Tilemaps/Tileset/)

The [Tileset](../../../../Tilemaps/Tileset/) created by this method.

### Exceptions

ArgumentOutOfRangeException

Thrown if the index specified is less than zero or is greater than or equal to the total number of [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) elements in the given [AsepriteFile](../../../../AsepriteFile/).

### See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [Tileset](../../../../Tilemaps/Tileset/)

## Process(GraphicsDevice, AsepriteFile, string)

Processes a [Tileset](../../../../Tilemaps/Tileset/) from the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) with the specified name in the  given [AsepriteFile](../../../../AsepriteFile/).

```csharp
public static Tileset Process(GraphicsDevice device, AsepriteFile aseFile, string tilesetName);
```

### Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseFile`  [AsepriteFile](../../../../AsepriteFile/)

The [AsepriteFile](../../../../AsepriteFile/) that contains the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to process.

`tilesetName`  string

The name of the [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) element in the [AsepriteFile](../../../../AsepriteFile/) to process.

### Returns

[Tileset](../../../../Tilemaps/Tileset/)

The [Tileset](../../../../Tilemaps/Tileset/) created by this method.

### Exceptions

InvalidOperationException

Thrown if the given [AsepriteFile](../../../../AsepriteFile/) does not contain an [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) element  with the specified name.

### See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [Tileset](../../../../Tilemaps/Tileset/)

## Process(GraphicsDevice, AsepriteTileset)

Processes a [Tileset](../../../../Tilemaps/Tileset/) from an [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/).

```csharp
public static Tileset Process(GraphicsDevice device, AsepriteTileset aseTileset);
```

### Parameters

`device`  GraphicsDevice

The GraphicsDevice used to create graphical resources.

`aseTileset`  [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/)

The [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/) to process.

### Returns

[Tileset](../../../../Tilemaps/Tileset/)

The [Tileset](../../../../Tilemaps/Tileset/) created by this method.

### See Also

- [AsepriteFile](../../../../AsepriteFile/)
- [AsepriteTileset](../../../../AsepriteTypes/AsepriteTileset/)
- [Tileset](../../../../Tilemaps/Tileset/)

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
