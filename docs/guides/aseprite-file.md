---
id: aseprite-file
title: Aseprite File
sidebar_label: Aseprite File
---

The purpose of this document is to provide an overview of the `AsepriteFile` class and how it can be used. This class is the bases of everything else in this library, so it's important for you to have a general understanding of it before continuing.

## Overview

The `AsepriteFile` class is the starting point for everything that can be done using this library. When the contents of an aseprite file are imported, they are presented as an instance of the `AsepriteFile` class. Here you can find the data for every layer, frame, cel, slice, and tag. If you're using the current Aseprite 1.3-beta version, you'll also have the tileset and tilemap data.

The data presented in this is similar to how it is presented in the Aseprite application. For instance, each `AsepriteFrame` element in the `AsepriteFile` contains the individual `AsepriteCel` elements. These `AsepriteCel` elements contain the pixel data for that cel only. This gives you, the user, greater control over how to best use this data. You can, for instance, use each cel as a per layer image for that frame. Or you can combine all the cels in a frame to have the complete frame image to use.

## Importing The Aseprite File

To create a new instance of the `AsepriteFile` class, you first need to import it. You can import it either at runtime in your code or via the MGCB Editor. The following sections detail both method, choose the one tha best fits you workflow.

<details>
    <summary> Importing At Runtime (Without MGCB-Editor)</summary>

The following code demonstrates how to import the contents of an aseprite file as an instance of the `AsepriteFile` class through code:

**Add using statement**

```cs
using MonoGame.Aseprite;
```

**Load the Aseprite file**

```cs
AsepriteFile aseFile = AsepriteFile.Load("path/to/the/file");
```

That's it!

</details>

<details>
    <summary>Importing using the MGCB Editor</summary>

To import the contents of the aseprite file as an instance of the `AsepriteFile` class using the MGCB Editor, you'll need to choose the **Aseprite File Processor - MonoGame.Aseprite** processor in the MGCB Editor.

![A screenshot of the MGCB Editor highlighting the Aseprite File Processor option](/img/docs/guides/aseprite-file/aseprite-file-processor.png)

After setting this up in the MGCB Editor, you can load it at runtime using the `ContentManager`. The following code demonstrates how to do this:

**Add using statement**

```cs
using MonoGame.Aseprite;
```

**Load via the `ContentManager`**

```cs
AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");
```

</details>

:::tip

For information the properties and methods provided through the `AsepriteFile` class, see the [AsepriteFile Class] API documentation.

:::

## Conclusion
Now that you have the aseprite file imported as an `AsepriteFile` class instance, you can transform this data into one of the various *out-of-the-box* classes provided in this library.  The following links are to the documentation on these classes:

* [Sprite]
* [TextureAtlas]
* [SpriteSheet]
* [Tileset]
* [Tilemap]
* [AnimatedTilemap]
