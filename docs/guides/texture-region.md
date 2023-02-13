---
id: texture-region
title: TextureRegion
sidebar_label: TextureRegion
---

import TilemapImage from '/img/docs/guides/texture-region/tilemap.png';
import TilemapImageRegionMarked from '/img/docs/guides/texture-region/tilemap-region-marked.png';

The purpose of this document is to provide an overview of the `TextureRegion` class, and how it is used within the `MonoGame.Aseprite` library.

## Overview

The `TextureRegion` class is a small wrapper that wraps an existing `Texture2D` instance and provides the source `Rectangle` that represents the region within the `Texture2D` to be rendered. To illustrate this, take the following image.  This image contains 6 separate images packed into the one source image.

<img src={TilemapImage} style={{imageRendering: '-moz-crisp-edges'}}/>


<small>

Tilemap is from the [Tiny Town Tilemap by Kenney](https://www.kenney.nl/assets/tiny-town) licensed under [CCO 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

</small>

When you import this as a `Texture2D`, you don't want to render the entire image. Instead, you'll want to use this image but only render one part of it. For instance, let's take the yellow bush in the lower-left corner as shown below.

<img src={TilemapImageRegionMarked} style={{imageRendering: '-moz-crisp-edges', width: 100 + '%'}}/>

Let's say this yellow bush is at position x:48 y:32 with a width and height of 16 pixels.

Normally if we wanted to render just this yellow bush in MonoGame with the `SpriteBatch`, we would need to give the `SpriteBatch` a `sourceRectangle` value that specifies where that yellow bush is to render it. This is done like the following

```cs
Rectangle sourceRectangle = new(48, 32, 16, 16);
spriteBatch.Draw(texture, Vector2.Zero, sourceRectangle, Color.White);
```

The `TextureRegion` class is just this. It wraps an existing `Texture2D` instance and has a `TextureRegion.Bounds` property that specifies the source rectangle value to use when rendering it. In this way, we can use a `TextureRegion` instance as a **concrete representation of a region within a texture**. `MonoGame.Aseprite` also provides extension methods for the `SpriteBatch` for drawing a `TextureRegion` instance and you don't even have to supply the `sourceRectangle` value, it will pull it for you and apply it.

## Creating a `TextureRegion`

Since the `TextureRegion` class is used in almost every class in the `MonoGame.Aseprite` library, there are various ways of having one created, or getting one to use. You can also create one manually using its constructor method. The sections below will go over them.

### From a `TextureAtlas`

If you have an existing `TextureAtlas` instance, you can create a new `TextureRegion` for the `TextureAtlas` using the following methods

```cs
protected override void LoadContent()
{
    //  Load the Texture2D
    Texture2D tinyTownTilemap = Content.Load<Texture2D>("tinyTownTilemap");

    //  Create a TextureAtlas
    TextureAtlas atlas = new(name: "tinyTownTilemap", texture: tinyTownTilemap);
    
    //  Create the region using the x, y, width, and height values
    TextureRegion yellowBushRegion = atlas.CreateRegion(name: "yellowBush", x: 48, y: 32, width: 16, height: 16);

    //  Create the region specifying a location and size
    TextureRegion greenBushRegion = atlas.CreateRegion(name: "greenBush", location: new Point(64, 32), size: new Point(16, 16));

    //  Create the region specifying the rectangle
    TextureRegion mushroomRegion = atlas.CreateRegion(name: "mushroom", new Rectangle(80, 32, 16, 16));
}
```

:::note

In the example above we are creating the `TextureAtlas` manually from a `Texture2D`.  If you are creating the `TextureAtlas` from an `AsepriteFile` using the `TextureAtlasProcessor`, each frame from the Aseprite file is added automatically as a `TextureRegion` with the name of each region begin `fileName_frameNum`.  For example if the file name is `tinyTownTilemap.aseprite` then the `TextureRegion` at index 0 is `tinyTownTilemap_0`.

:::



When you use the `TextureAtlas.CreateRegion` methods, the `TextureRegion` that is created is returned, but it is also added internally to the collection of `TextureRegion` elements for that texture atlas.  If you need to retrieve it later from the `TextureAtlas`, you can use one of the `Get` or `TryGet` methods provided

```cs
//  Get the region by index
TextureRegion yellowBushRegion = atlas.GetRegion(0);
```

```cs
//  Get the region by name
TextureRegion greenBushRegion = atlas.GetRegion("green bush");
```

```cs
//  TryGet region by index
if(atlas.TryGetRegion(2, out TextureRegion? mushroomRegion))
{
    //  Do something with the texture region
}
```

```cs
//  TryGet region by name
if(atlas.TryGetRegion("mushroom", out TextureRegion? mushroomRegion))
{
    //  Do something with the texture region
}
```

### From a `SpriteSheet`
A `SpriteSheet` is a wrapper around a `TextureAtlas` and provides the `SpriteSheet.TextureAtlas` property to access it.  If you have an existing `SpriteSheet` instance, you can create new `TextureRegions` from its `TextureAtlas` using the methods described in the [From a `TextureAtlas`](#from-a-textureatlas) section.

For example
```cs
//  Access the TextureAtlas property of the spritesheet to use the methods for creating a region.
TextureRegion yellowBushRegion = spriteSheet.TextureAtlas.CreateRegion("yellowBush", x: 48, y: 32, width: 16, height: 16);
```

You would access the `SpriteSheet.TextureAtlas` to retrieve the `TextureRegion` elements as well as shown above in the [From a `TextureAtlas`](#from-a-textureatlas) section.


### From the Constructor
The `TextureRegion` class is not limited to only being used with the `MonoGame.Aseprite` library.  It provides a constructor you can use to create an instance from any `Texture2D` that you have loaded prior.  The following code demonstrates using the constructor.


**Add using statement**

```cs
using MonoGame.Aseprite;
```

**Create the TextureRegion**

```cs
protected override void LoadContent()
{
    //  Load your Texture2D
    Texture2D tinyTownTilemap = Content.Load<Texture2D>("tinyTownTilemap");

    //  Create the TextureRegion using the x, y, width, and height
    TextureRegion yellowBushRegion = new(name: "yellow bush", texture: tinyTownTilemap, x: 48, y: 32, width: 16, height: 16);

    //  Create the TextureRegion using the location and size
    TextureRegion greenBushRegion = new(name: "green bush", texture: tinyTownTilemap, location: new Point(64, 32), size: new Point(16, 16));

    //  Create the TextureRegion using the rectangle bounds
    TextureRegion mushroomRegion = new(name: "mushroom", texture: tinyTownTilemap, bounds: new Rectangle(80, 32, 16, 16));
}

```

## Drawing the `TextureRegion`

Once you have a `TextureRegion` instance, you'll want to be able to render it.  The `TextureRegion` class itself has a `Draw` method with several overloads for ease-of-use.


```cs
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.Black);

    _spriteBatch.Begin(samplerState: SamplerState.PointClaim)

    //  Draw using a position and color
    yellowBushRegion.Draw(_spriteBatch, position: new Vector2(0, 0), color: Color.White);

    //  Draw using a destination rectangle
    greenBushRegion.Draw(_spriteBatch, destinationRectangle: new Rectangle(16, 0, 16, 16), color: Color.White);

    //  Draw using a the full range of parameters for a spritebatch
    mushroomRegion.Draw(_spriteBatch, position: new Vector2(32, 0), 
                                        color: Color.White,
                                        rotation: 0.0f,
                                        origin: Vector2.Zero,
                                        scale: Vector2.One,
                                        effects: SpriteEffects.None,
                                        layerDepth: 0.0f);

    _spriteBatch.End();
}
```

`MonoGame.Aseprite` also provides `SpriteBatch` extension methods that can be used to achieve the same result

```cs
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.Black);

    _spriteBatch.Begin(samplerState: SamplerState.PointClaim)

    //  Draw using a position and color
    _spriteBatch.Draw(yellowBushRegion, position: new Vector2(0, 0), color: Color.White);

    //  Draw using a destination rectangle
    _spriteBatch.Draw(greenBushRegion, destinationRectangle: new Rectangle(16, 0, 16, 16), color: Color.White);

    //  Draw using a the full range of parameters for a spritebatch
    _spriteBatch.Draw(mushroomRegion, position: new Vector2(32, 0), 
                                      color: Color.White,
                                      rotation: 0.0f,
                                      origin: Vector2.Zero,
                                      scale: Vector2.One,
                                      effects: SpriteEffects.None,
                                      layerDepth: 0.0f);

    _spriteBatch.End();
}
```

:::info

There are additional overloads not shown in the examples above.  For each overload that the `SpriteBatch.Draw` method natively provides for `Texture2D`, there is a matching overload method for both `TextureRegion.Draw` and `SpriteBatch.Draw` for `TextureRegion` elements.

:::

## Conclusion

In this document we went over what a `TextureRegion` is, how to create an instance using the `TextureAtlas` and `SpriteSheet` classes and with the constructor, and how to render an instance using the `SpriteBatch`.  Below you can find links to additional guides for the types that were mentioned in this document and a reference link to the `TextureRegion` api document.

## See Also

The following classes are referenced in this document and the links to their guides are provided below.

- [TextureAtlas]
- [SpriteSheet]

## References

Refer to the [TextureRegion API] for more information on the properties and methods of the `TextureRegion` class.
