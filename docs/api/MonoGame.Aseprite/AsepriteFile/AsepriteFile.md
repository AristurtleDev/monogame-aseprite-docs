---
title: AsepriteFile Class
sidebar_label: AsepriteFile

---

**Namespace:** [MonoGame.Aseprite](../)  
**Assembly:** MonoGame.Aseprite

Defines the contents of an imported aseprite file.

```csharp
public sealed class AsepriteFile
```

**Inheritance:** object → AsepriteFile

## Properties

| Name                                       | Description                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [CanvasHeight](Properties/CanvasHeight.md) | Gets the height, in pixels, of the canvas.                                                                                                                         |
| [CanvasWidth](Properties/CanvasWidth.md)   | Gets the width, in pixels, of the canvas.                                                                                                                          |
| [FrameCount](Properties/FrameCount.md)     | Gets the total number of [AsepriteFrame](../AsepriteTypes/AsepriteFrame/) elements in this AsepriteFile.                                                   |
| [Frames](Properties/Frames.md)             | Gets a read\-only span of all [AsepriteFrame](../AsepriteTypes/AsepriteFrame/) elements in this AsepriteFile.                                              |
| [LayerCount](Properties/LayerCount.md)     | Gets the total number of [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) elements in this AsepriteFile.                                                   |
| [Layers](Properties/Layers.md)             | Gets a read\-only span of all [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) elements in this AsepriteFile.   Order of elements if from bottom\-to\-top. |
| [Name](Properties/Name.md)                 | Gets the name assigned to this  AsepriteFile.                                                                                                                      |
| [Palette](Properties/Palette.md)           | Gets a read\-only span of the color values that represent the palette of this AsepriteFile.                                                                        |
| [PaletteCount](Properties/PaletteCount.md) | Gets the total number of color values in this palette of this AsepriteFile.                                                                                        |
| [SliceCount](Properties/SliceCount.md)     | Gets the total number of [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) elements in this AsepriteFile.                                                   |
| [Slices](Properties/Slices.md)             | Gets a read\-only span of all [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) elements in this AsepriteFile.                                              |
| [TagCount](Properties/TagCount.md)         | Gets the total number of [AsepriteTag](../AsepriteTypes/AsepriteTag/) elements in this AsepriteFile.                                                       |
| [Tags](Properties/Tags.md)                 | Gets a read\-only span of all [AsepriteTag](../AsepriteTypes/AsepriteTag/) elements in this AsepriteFile.                                                  |
| [TilesetCount](Properties/TilesetCount.md) | Gets the total number of [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) elements in this AsepriteFile.                                               |
| [Tilesets](Properties/Tilesets.md)         | Gets a read\-only span of all [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) elements in this AsepriteFile.                                          |
| [UserData](Properties/UserData.md)         | Gets the [AsepriteUserData](../AsepriteTypes/AsepriteUserData/) that was set for the sprite element in aseprite.                                           |

## Methods

| Name                                                                                                   | Description                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GetFrame(int)](Methods/GetFrame.md)                                                                   | Gets the [AsepriteFrame](../AsepriteTypes/AsepriteFrame/) at the specified index in this AsepriteFile.                                                   |
| [GetLayer(int)](Methods/GetLayer.md#getlayerint)                                                       | Gets the [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) element at the specified index in this AsepriteFile.                                           |
| [GetLayer(string)](Methods/GetLayer.md#getlayerstring)                                                 | Gets the [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) element with the specified name from this AsepriteFile.                                        |
| [GetSlice(int)](Methods/GetSlice.md#getsliceint)                                                       | Gets the [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) element at the specified index in this AsepriteFile.                                           |
| [GetSlice(string)](Methods/GetSlice.md#getslicestring)                                                 | Gets the [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) with the specified name from this AsepriteFile.                                                |
| [GetTag(int)](Methods/GetTag.md#gettagint)                                                             | Gets the [AsepriteTag](../AsepriteTypes/AsepriteTag/) element at the specified index in this AsepriteFile.                                               |
| [GetTag(string)](Methods/GetTag.md#gettagstring)                                                       | Gets the [AsepriteTag](../AsepriteTypes/AsepriteTag/) element with the specified name from this AsepriteFile.                                            |
| [GetTileset(int)](Methods/GetTileset.md#gettilesetint)                                                 | Gets the [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) element at the specified index in this AsepriteFile.                                       |
| [GetTileset(string)](Methods/GetTileset.md#gettilesetstring)                                           | Gets the [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) element with the specified name from this AsepriteFile.                                    |
| [Load(string)](Methods/Load.md)                                                                        | Loads the contents of the aseprite file at the specified path.  The result is a new instance of the AsepriteFile class containing the contents of the file read. |
| [TryGetFrame(int, AsepriteFrame)](Methods/TryGetFrame.md)                                              | Gets the [AsepriteFrame](../AsepriteTypes/AsepriteFrame/) at the specified index from this AsepriteFile.                                                 |
| [TryGetLayer(int, AsepriteLayer)](Methods/TryGetLayer.md#trygetlayerint-asepritelayer)                 | Gets the [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) element at the specified index from this AsepriteFile.                                         |
| [TryGetLayer(string, AsepriteLayer)](Methods/TryGetLayer.md#trygetlayerstring-asepritelayer)           | Gets the [AsepriteLayer](../AsepriteTypes/AsepriteLayer/) element with the specified name from this AsepriteFile.                                        |
| [TryGetSlice(int, AsepriteSlice)](Methods/TryGetSlice.md#trygetsliceint-asepriteslice)                 | Gets the [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) element at the specified index from this AsepriteFile.                                         |
| [TryGetSlice(string, AsepriteSlice)](Methods/TryGetSlice.md#trygetslicestring-asepriteslice)           | Gets the [AsepriteSlice](../AsepriteTypes/AsepriteSlice/) element with the specified name from this AsepriteFile.                                        |
| [TryGetTag(int, AsepriteTag)](Methods/TryGetTag.md#trygettagint-asepritetag)                           | Gets the [AsepriteTag](../AsepriteTypes/AsepriteTag/) element at the specified index from this AsepriteFile.                                             |
| [TryGetTag(string, AsepriteTag)](Methods/TryGetTag.md#trygettagstring-asepritetag)                     | Gets the [AsepriteTag](../AsepriteTypes/AsepriteTag/) element with the specified name from this AsepriteFile.                                            |
| [TryGetTileset(int, AsepriteTileset)](Methods/TryGetTileset.md#trygettilesetint-asepritetileset)       | Gets the [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) element at the specified index from this AsepriteFile.                                     |
| [TryGetTileset(string, AsepriteTileset)](Methods/TryGetTileset.md#trygettilesetstring-asepritetileset) | Gets the [AsepriteTileset](../AsepriteTypes/AsepriteTileset/) element  with the specified name from this AsepriteFile.                                   |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
