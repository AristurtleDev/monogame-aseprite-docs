---
id: sprite-sheet
title: SpriteSheet Class
sidebar_label: SpriteSheet
---

The purpose of this document is to provide a guide for creating an instance of the `SpriteSheet` class.

## Overview

The `SpriteSheet` class is a wrapper around the `TextureAtlas` class that provides additional functionality for defining animations and creating `AnimatedSprite` instances. Each `TextureRegion` element from the `TextureAtlas` it wraps represents the frames of animation that can be used to define `AnimationTag` elements. In turn, these defined `AnimationTag` elements can be used to create `AnimatedSprite` instances from the `SpriteSheet`.

## Creating a `SpriteSheet`

`MonoGame.Aseprite` provides a couple of different ways to create an instance of the `SpriteSheet` class. The simplest, and recommended way of doing this is by using an existing instance of the `AsepriteFile` class with the `SpriteSheetProcessor`. By using this method, several elements within the `Spritesheet` will be created automatically for you, including the source `TextureAtlas` and its `TextureRegion` elements. Additionally, all of the `AsepriteTag` elements will be converted to `AnimationTag` elements automatically. This gets you going with the least amount of code needed on your end.

However, I didn't want to take away full control from the user. So those that would like a more manual, finally grained approach, to creating a `SpriteSheet`, it does provide a constructor and supporting methods to do it all manually. Both methods will be discussed in the following sections.

### From an `AsepriteFile`

If you have an existing `AsepriteFile` instance, you can use the `SpriteSheetProcessor` to create a new `SpriteSheet`.

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the `SpriteSheet`**

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  Create the sprite sheet using the SpriteSheetProcessor
    SpriteSheet spritSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally, there are several optional parameters that can be included when create a `SpriteSheet` using the `SpriteSheetProcessor`

| Optional Parameter       | Default Value | Summary                                                                                                |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------ |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                      |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer marked as a background layer should be included.                     |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on tilemap layers should be included.                                           |
| `mergedDuplicates`       | `true`        | Indicates whether duplicate frames should be merged into a single frame in the generated source image. |
| `borderPadding`          | `0`           | The amount of transparent pixels add to the edges of the generated source image                        |
| `spacing`                | `0`           | The amount of transparent pixels to add between each texture region in the generated source image.     |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each texture region in the generated image.             |

The following example shows creating a `SpriteSheet` using the `SpriteSheetProcessor` while supplying the additional optional parameters:

**Add using statement.**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the `SpriteSheet` using optional parameters.**

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  Example using all optional parameters with their defaults
    SpriteSheet atlas = SpriteSheetProcessor.Process(GraphicsDevice, aseFile,
                                                     onlyVisibleLayers: true,
                                                     includeBackgroundLayer: false,
                                                     includeTilemapLayers: true,
                                                     mergeDuplicates: true,
                                                     borderPadding: 0,
                                                     spacing: 0,
                                                     innerPadding 0);

}
```

### From the Constructor

If you have an existing `TextureAtlas` instance, you can create a new `SpriteSheet` manually using its constructor method. The following code demonstrates this process:

**Add using statement**

```cs

//  Add the following using statements.
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;

//  Creating a spritesheet from an existing TextureAtlas instance.
protected override LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  Create the TextureAtlas from the AsepriteFile
    TextureAtlas textureAtlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);

    /*
        //  optionally, you can create the TextureAtlas manually as well
        //  First load a texture
        Texture2D atlasTexture = Content.Load<Texture2D>("textureAtlas");

        //  The create the atlas
        TextureAtlas textureAtlas = new(name: "texture atlas", texture: atlasTexture);

        //  You will then need to define all TextureRegion elements in the texture atlas
        //  manually.  See the TextureAtlas guide document for more information.
    */

    //  Create an instance of the SpriteSheet class using the TextureAtlas
    SpriteSheet spriteSheet = new(name: "sprite sheet", atlas: textureAtlas);
}

```

:::caution

As mentioned previously, creating a `SpriteSheet` from an existing `AsepriteFile` is the recommended way of doing this since it will use all of the `AsepriteTag` elements in the `AsepriteFile` to automatically create all of the animation definitions for you in the `SpriteSheet`. When creating it manually from a `TextureAtlas`, you will have to define all of the animations manually as well. If you created the `TextureAtlas` manually, like shown in the commented out section in the example above, you will also have to specify the `TextureRegion` elements for the atlas manually as well.

:::

## Create an `AnimationTag`

Now that you have the `SpriteSheet` instance created, it will need `AnimationTag` elements added to it before you can create an `AnimatedSprite` from it. An `AnimationTag` defines information for an animation such as the frames of animation, is it looping, reversed, or ping-pongs, etc. If you created your `SpriteSheet` instance using an `AsepriteFile` instance, then all of the `AsepriteTag` elements were automatically added for you as `AnimationTag` elements.

However, if you created the `SpriteSheet` manually, or if you just want to further customize and add additional animations that you did not define within Aseprite, then the following will show you how to do this:

```cs
//  Example of creating an AnimationTag in a SpriteSheet.
AnimationTag tag = spriteSheet.CreateAnimationTag(name: "idle", builder =>
{
    builder.IsLooping(true)
           .IsReversed(false)
           .IsPingPong(false)
           .AddFrame(regionIndex: 0, duration: TimeSpan.FromMilliseconds(100))
           .AddFrame(regionIndex: 1, duration: TimeSpan.FromMilliseconds(100))
           .AddFrame(regionIndex: 2, duration: TimeSpan.FromMilliseconds(100));
});
```

In the example above, we create define a new animation called `"idle"`. This animation is looping, is -not- reversed, and does -not- ping-pong. It then adds three frames of animation to it using the `TextureRegion` elements at index 0, 1, and 2 from the source `TextureAtlas` in the `SpriteSheet` each with a duration of 100 milliseconds.

Additionally, if you can use the `TextureRegion` names from the `TextureAtlas` instead of the index if you prefer

```cs
//  Example of creating the AnimationTag using the TextureRegion names instead of the index
AnimationTag tag = spriteSheet.CreateAnimationTag(name: "idle", builder =>
{
    builder.IsLooping(true)
           .IsReversed(false)
           .IsPingPong(false)
           .AddFrame(regionName: "idle-frame-0", duration: TimeSpan.FromMilliseconds(100))
           .AddFrame(regionName: "idle-frame-1", duration: TimeSpan.FromMilliseconds(100))
           .AddFrame(regionName: "idle-frame-2", duration: TimeSpan.FromMilliseconds(100));
});
```

:::note
The `TextureRegion` names follow the format of `fileName_frameNum` if you created the `TextureAtlas` from an `AsepriteFile` using the `TextureAtlasProcessor`.
:::

:::caution

When creating the `AnimationTag` for the `SpriteSheet`, you give the index or the name of the `TextureRegion` to use when adding a frame to the builder. These `TextureRegions` indexes and names are from the `TextureAtlas` that the `SpriteSheet` is wrapping. This means that index or name must exist within that `TextureAtlas` or an exception will be thrown when trying to add the frame to the builder.

:::

## Creating an `AnimatedSprite`

Once you have a `SpriteSheet` created, with `AnimationTag` elements defined in it, you can use the `SpriteSheet` to create instances of the `AnimatedSprite` class using the `SpriteSheet.CreateAnimatedSprite` method. All you need to do is supply the name of the `AnimationTag` to use for the `AnimatedSprite` being created. The following code example demonstrates this:

```cs
//  Create an animated sprite using a previously added animation tag.
AnimatedSprite animatedSprite = spriteSheet.CreateAnimatedSprite("idle");
```

For more information on the `AnimatedSprite` class and how to use it, see the [AnimatedSprite guide].

## Create a `Sprite`

You can also create a `Sprite` using the `SpriteSheet.CreateSprite` methods. Just pass it the index or name of the `TextureRegion` in the source `TextureAtlas` of the `SpriteSheet` to create the `Sprite` with. The following code example demonstrates this

```cs
//  Create a Sprite from a region by index
Sprite sprite = spriteSheet.CreateSprite(0);
```

```cs
//  Create a Sprite from a region by name
Sprite sprite = spriteSheet.CreateSprite("region 0");
```

# add information on creating the animated sprite next

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
