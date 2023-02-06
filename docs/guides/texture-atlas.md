---
id: texture-atlas
title: Texture Atlas
sidebar_label: Texture Atlas
---

The purpose of this document is to provide an overview of the `Sprite` class and how to create an instance of it.

## Overview

The `Sprite` class represents the image of a single frame from an aseprite file. It contains various properties that can be set to control how the sprite is rendered. The `MonoGame.Aseprite` library also provides extension methods for the `SpriteBatch` class for rendering a `Sprite` instance.

The `Sprite` class also provides a constructor method that can be used to create an instance using either a `MonoGame.Aseprite.TextureRegion` or by using a standard `Texture2D`. So it's not limited to just being created from an `AsepriteFile`.

## Creating a Sprite from an `AsepriteFile`

`Monogame.Aseprite` provides a `SpriteProcessor` class for a convenient way of creating a `Sprite` from a single `AsepriteFrame` in an `AsepriteFile`. To do this, you'll first need an instance of the `AsepriteFile` class. See the [Aseprite File](./aseprite-file.md) document for information on how to import your aseprite file.

Once you have your `AsepriteFile` class, you can create a new `Sprite` using the following code:

**Add using statement**

```cs
using MonoGame.Aseprite.Content.Processors;
```

**Create the Sprite**

```cs
//  optional parameters
//  - onlyVisibleLayers: Specifies if only visible layers should be included. Default is true
//  - includeBackgroundLayer: Specifies if the layer marked as the background layer should be included.  Default is false.
//  - includeTilemapLayers: Specifies if tilemap layers should be included. Default is true.
Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex);
```

## Importing a Sprite

Alternatively, you can import a sprite through the MGCB Editor. To do this, just change the **Processor** to **Aseprite Sprite Processor - MonoGame.Aseprite** when importing the content.

![Screenshot showing the Aseprite Sprite Processor selected in the MGCB Editor](/img/docs/guides/sprite/sprite-processor.png)

The **Aseprite Sprite Processor** has the following properties that can be adjusted in the MGCB Editor:

| Property                 | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| Frame Index              | The index of the frame in the aseprite file to processes as a sprite. |
| Include Background Layer | Indicates if a layer marked as a background layer should be included. |
| Include Tilemap Layer    | Indicates if tilemap layers should be included.                       |
| Only Visible Layers      | Indicates if only visible layers should be included.                  |

## Drawing the Sprite

Once you have the `Sprite` class created, you'll want to be able to render it. The `Sprite` class itself has a `Draw` method for ease-of-use.

```cs
sprite.Draw(spriteBatch, position)
```

`MonoGame.Aseprite` also provides a `SpriteBatch` extension method that can be used to achieve the same result

```cs
spriteBatch.Draw(sprite, position);
```

Calling these methods will render the sprite at the `position` specified using the other properties of the `Sprite` class for the color, origin, rotation, scale, sprite effects, and layer depth. These properties are settable and can be changed as you need.

If you would prefer greater control over the rendering, you can render the `Sprite.TextureRegion` directly and supply your own values for the color, origin, rotation, scale, sprite effects, and layer depth. The following demonstrates how to do this:

```cs
spriteBatch.Draw(sprite.TextureRegion, position, color, rotation, origin, scale, spriteEffects, layerDepth);
```

## References
Refer to the [Sprite API] for more information on the properties and methods of the `Sprite` class.


