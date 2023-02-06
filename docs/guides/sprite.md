---
id: sprite
title: Sprite
sidebar_label: Sprite
---

The purpose of this document is to provide an overview of the `Sprite` class and how to create an instance of it.

## Overview

The `Sprite` class represents the image of a single frame from an aseprite file. It contains various properties that can be set to control how the sprite is rendered. The `MonoGame.Aseprite` library also provides extension methods for the `SpriteBatch` class for rendering a `Sprite` instance.

The `Sprite` class also provides a constructor method that can be used to create an instance using either a `MonoGame.Aseprite.TextureRegion` or by using a standard `Texture2D`. So it's not limited to just being created from an `AsepriteFile`.

## Creating a `Sprite`

There are a couple of ways to create a `Sprite`; you can create it from an existing `AsepriteFile` instance or from an existing `TextureAtlas` instance. Alternatively, you can create it using the MGCB Editor when you import your aseprite file.

The following sections cover how to create the `Sprite` from the methods discussed above:

### From an `AsepriteFile`

If you have an existing `AsepriteFile` instance, you can use the `SpriteProcessor` to create a new `Sprite` from any `AsepriteFrame` element in the `AsepriteFile`.

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

### From a `TextureAtlas`

If you have an existing `TextureAtlas` instance, you can create a new `Sprite` from any of the `TextureRegion` elements in the atlas. The following demonstrates created a `Sprite` from the `TextureRegion` at index 5 in a `TextureAtlas`.

```cs
Sprite sprite = textureAtlas.CreateSprite(5);
```

Alternatively, if you know the name of the `TextureRegion` element, you can use that instead

```cs
Sprite sprite = textureAtlas.CreateSprite("mySprite_5");
```

:::tip

The `TextureRegion` names when the `TextureAtlas` is created by an `AsepriteFile` use the following naming convention: `fileName_frameNum`. For instance, if the aseprite file was called **mySprite.aseprite**, then the `TextureRegion` for frame 5 would be named `mySprite_5`.

:::

### Imported using the MGCB Editor

Alternatively, you can import a sprite through the MGCB Editor. To do this, just change the **Processor** to **Aseprite Sprite Processor - MonoGame.Aseprite** when importing the content.

![Screenshot showing the Aseprite Sprite Processor selected in the MGCB Editor](/img/docs/guides/sprite/sprite-processor.png)


::: note

When creating a `Sprite` using the MGCB Editor, only the `Sprite` is created. The additional content from the aseprite file is not processed and will not be accessible at runtime.

:::


The **Aseprite Sprite Processor** has the following properties that can be adjusted in the MGCB Editor:

| Property                 | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| Frame Index              | The index of the frame in the aseprite file to processes as a sprite. |
| Include Background Layer | Indicates if a layer marked as a background layer should be included. |
| Include Tilemap Layer    | Indicates if tilemap layers should be included.                       |
| Only Visible Layers      | Indicates if only visible layers should be included.                  |

Then you load it at runtime in your code using the `ContentManager`.  The following demonstrates this:

**Add using statement**
```cs
using Monogame.Aseprite.Sprites;
```

**Load using the `ContentManager`**
```cs
//  Wherever you load assets.
Sprite sprite = Content.Load<Sprite>("content-name");
```


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
