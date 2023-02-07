---
id: the-aseprite-file
title: The Aseprite File
sidebar_label: The Aseprite File
---

The purpose of this document is to provide an overview of the `AsepriteFile` class, We will discuss how to import your Aseprite file as an instance of the `AsepriteFile` class, and how to process that instance as a `Sprite`, `TextureAtlas`, `SpriteSheet`, `Tileset`, `Tilemap`, and/or an `AnimatedTilemap`.

# Overview

The `AsepriteFile` class is the starting point for everything that can be done using this library. When the contents of your Aseprite file are imported, they are presented through the properties of the `AsepriteFile` instance that is created. This includes each layer, frame, cel, tag, and slice. If you are using Aseprite 1.3-beta, the tilesets and tilemaps are also imported.

The data presented in the `AsepriteFile` class is similar to how it is presented in the Aseprite application. For instance, each `AsepriteFrame` element represents the frames in Aseprite and they contain a collection of `AsepriteCel` elements that correspond to the cels. Each `AsepriteCel` contains the individual pixel data for the cel it represents. This means you can get the individual cel pixel data per layer, per frame, if you wanted to go that granular. However, that is an advanced topic which is out of scope for this document. If you're interested in getting into the weeds with this, I recommend checking out that advanced guides section.

## Loading the Aseprite File

The first thing you want to do is load the contents of your Aseprite file as an instance of the `AsepriteFile` class. The `AsepriteFile` class provides the static method `AsepriteFile.Load` to achieve this.

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");
}
```

:::tip

Loading the Aseprite file from disk is like loading any asset in your game, and should be done where you load your game assets. For instance, within the `LoadContent` method of your `Game` class like shown in the example above.

:::

Now that you have the `AsepriteFile` instance created, the next step is to process the contents into something meaningful. This is discussed in the [Processors](processors) document next.
