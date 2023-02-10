---
id: load-aseprite-file
title: Load Aseprite File
sidebar_label: Load Aseprite File
---

This documents provides the instructions for loading the Aseprite (.ase | .aseprite) file in your game as an `AsepriteFile` class instance.

## Prerequisites
* [Install `MonoGame.Aseprite`](./installation)

## Example

```csharp
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

/////////////////////////////////////////////////////////////
///
///  Add these using statements
///
/////////////////////////////////////////////////////////////
using MonoGame.Aseprite;

public class MyGame : Game
{
    // other code removed for brevity 

    protected override void LoadContent()
    {
        AsepriteFile aseFile = AsepriteFile.Load("path/to/aseprite/file.aseprite");

        /////////////////////////////////////////////////////////////
        ///
        ///  If you imported it with the MGCB Editor, load the
        ///  Aseprite file using the ContentManager instead like shown
        ///  below.
        ///
        /////////////////////////////////////////////////////////////
        //  AsepriteFile aseFile = Content.Load<AsepriteFile>("file");
    }
}
```

:::tip

For more information on the `AsepriteFile` class, see the [AsepriteFile Guide]

:::

## Next Steps
Use the `AsepriteFile` class to any of the following:
* [Create a `Sprite` From a Frame](./create-sprite-from-frame)
* [Create a `TextureAtlas`](./create-texture-atlas)
* [Create a `SpriteSheet`](./create-spritesheet)
* [Create a `Tileset`](./create-tileset)
* [Create a `Tilemap`](./create-tilemap)
* [Create an `AnimatedTilemap`](./create-animated-tilemap)




