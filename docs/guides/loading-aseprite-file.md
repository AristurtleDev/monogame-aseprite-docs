---
id: loading-aseprite-file
title: Loading the Aseprite File
sidebar_label: Loading the Aseprite File
---

The purpose of this document is to provide an overview of loading your Aseprite file from disk into an instance of the `AsepriteFile` class.

## Overview

The `AsepriteFile` class is the starting point for everything that can be done using this library. When the contents of an Aseprite file are imported, they are presented as an instance of the `AsepriteFile` class. Here you can find the data for every layer, frame, cel, slice, and tag. If you're using the current Aseprite 1.3-beta version, you'll also have the tileset and tilemap data.

The data presented in this is similar to how it is presented in the Aseprite application. For instance, each `AsepriteFrame` element in the `AsepriteFile` contains the individual `AsepriteCel` elements. These `AsepriteCel` elements contain the pixel data for that cel only. This gives you, the user, greater control over how to best use this data. You can, for instance, use each cel as a per layer image for that frame. Or you can combine all the cels in a frame to have the complete frame image to use.

## Loading the Aseprite File

The `AsepriteFile` class provides a convenient `Load(string)` method that can be called to load your aseprite file from disk to create the `AsepriteFile` class instance.

:::note

Loading the Aseprite file from disk is like loading any asset it your game and should be done where you load your game assets. For instance, within the `LoadContent` method in your `Game` class.

:::

The following code demonstrates how to load the aseprite file at runtime

**Add using statement**

```cs
using MonoGame.Aseprite;
```

**Load the file**

```cs
AsepriteFile aseFile = AsepriteFile.Load("path/to/the/file");
```

## Conclusion

Now that you have the Aseprite file imported as an `AsepriteFile` class instance, you can transform this data into one of the various _out-of-the-box_ classes provided in this library. The following links are to the guides on these classes:

- [Sprite]
- [TextureAtlas]
- [SpriteSheet]
- [Tileset]
- [Tilemap]
- [AnimatedTilemap]
