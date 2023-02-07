---
id: sprite
title: Sprite
sidebar_label: Sprite
---

The purpose of this document is to provide a guide for creating an instance of the `Sprite` class.

## Overview

The `Sprite` class represents the image of a single frame from an aseprite file. It contains various properties that can be set to control how the sprite is rendered. The `MonoGame.Aseprite` library also provides extension methods for the `SpriteBatch` class for rendering a `Sprite` instance.

The `Sprite` class also provides a constructor method that can be used to create an instance using either a `MonoGame.Aseprite.TextureRegion` or by using a standard `Texture2D`. So it's not limited to just being created from an `AsepriteFile`.

## Creating a `Sprite`

There are a couple of ways to create a `Sprite`; you can create it from an existing `AsepriteFile` instance, an existing `TextureAtlas` instance, or an existing `SpriteSheet` instance. The `Sprite` class can also be created manually with the constructor using a `TextureRegion` or a `Texture2D`.

The following sections cover how to create the `Sprite` from the methods discussed above:

### From an `AsepriteFile`

If you have an existing `AsepriteFile` instance, you can use the `SpriteProcessor` to create a new `Sprite` from any `AsepriteFrame` element in the `AsepriteFile`.

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the Sprite**

```cs
protected override LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  We'll create the sprite from the frame at index 1
    int frameIndex = 1;

    //  Create the sprite using the SpriteProcessor
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex);

    //  Additionally, there are 3 optional parameters that can be included when creating a sprite
    //  using the SpriteProcessor
    //
    //  - onlyVisibleLayers: Indicates whether only cels on visible layers should be included
    //  - includeBackgroundLayer: Indicates whether the layer marked as background should be included
    //  - includeTilemapLayers: Indicates whether tilemap layers should be included
    //
    //  Example using all three
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex, onlyVisibleLayers: true, includeBackgroundLayer: false, includeTilemapLayers: true);

}
```

### From a `TextureAtlas`

If you have an existing `TextureAtlas` instance, you can create a new `Sprite` from any of the `TextureRegion` elements in the atlas by using the `CreateSprite` method. The following code demonstrates this process:

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the Sprite**

```cs
protected override LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("myAsepriteFile");

    //  Create a texture atlas from the aseprite file
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);

    //  Create a sprite from the texture region at index 4 in the atlas
    Sprite sprite = atlas.CreateSprite(4);

    //  Alternatively, you can supply the name of the region if you know it.
    Sprite sprite = atlas.CreateSprite("myAsepriteFile_4");
}

```

:::tip

The `TextureRegion` names when the `TextureAtlas` is created by an `AsepriteFile` use the following naming convention: `fileName_frameNum`. For instance, if the aseprite file was called **myAsepriteFile.aseprite**, then the `TextureRegion` for frame 4 would be named `myAsepriteFile_4`.

:::

### From a `SpriteSheet`

If you have an existing `SpriteSheet` instance, you can create a new `Sprite` from any of the `TextureRegion` elements in the sprite sheet's atlas by using the `CreateSprite` method. The following code demonstrates this process:

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the Sprite**

```cs
protected override LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("myAsepriteFile");

    //  Create a spritesheet from the aseprite file
    SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);

    //  Create a sprite from the texture region at index 4 in the atlas
    Sprite sprite = spriteSheet.CreateSprite(4);

    //  Alternatively, you can supply the name of the region if you know it.
    Sprite sprite = spriteSheet.CreateSprite("myAsepriteFile_4");
}

```

### From the Constructor

The `Sprite` class is not limited to only being used with the `MonoGame.Aseprite` library. It provides several constructors you can use to create an instance from any `Texture2D` that you have loaded prior. The following code demonstrates using the constructor

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
```

**Create the Sprite**

```cs
protected override LoadContent()
{
    //  Load your Texture2D
    Texture2D texture = Content.Load<Texture2D>("myTexture");

    //  Create the Sprite
    Sprite sprite = new(texture);
}

```

## Sprite Properties

The `Sprite` class has several properties that you can adjust to define how it's rendered when rendering it with the `SpriteBatch`.

```cs
//  The color mask to apply when rendering
sprite.Color = Color.White;

//  The amount of transparency to apply when rendering
sprite.Transparency = 1.0f

//  The amount of rotation, in radians, to apply when rendering
sprite.Rotation = 0.0f;

//  The x- and y-coordinate origin point to apply when rendering.
sprite.Origin = Vector2.Zero
sprite.OriginX = 0.0f;
sprite.OriginY = 0.0f;

//  The scale factor to apply when rendering
sprite.Scale = Vector2.One;
sprite.ScaleX = 1.0f;
sprite.ScaleY = 1.0f;

//  The SpriteEffects to apply for horizontal and vertical flipping when rendering.
sprite.SpriteEffects = SpriteEffects.None;
sprite.FlipHorizontally = false;
sprite.FlipVertically = true;

//  The layer depth to apply when rendering
sprite.LayerDepth = 0.0f;

//  Can the sprite be rendered
sprite.IsVisible = true;
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

## Conclusion

In this document was went over how to create an instance of the `Sprite` class, the various properties that can be adjusted for an instance, and how to render an instance using the `SpriteBatch`. Below you can find links to additional guides for the types that were mentioned in this document and and reference links for the `Sprite` class.

## See Also

The following classes are referenced in this document and the links to their guides are provided below.

- [AsepriteFile]
- [TextureAtlas]
- [SpriteSheet]
- [TextureRegion]

## References

Refer to the [Sprite API] for more information on the properties and methods of the `Sprite` class.
