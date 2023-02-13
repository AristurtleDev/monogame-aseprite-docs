---
id: sprite-docs
title: Sprite Class
sidebar_label: Sprite Docs
---

Defines a named sprite

The [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') class is a general purpose wrapper around a 
[TextureRegion](TextureRegion.md 'MonoGame.Aseprite.TextureRegion') with properties to control how it is rendered.  When creating
a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') from an [MonoGame.Aseprite.AsepriteFile](https://docs.microsoft.com/en-us/dotnet/api/MonoGame.Aseprite.AsepriteFile 'MonoGame.Aseprite.AsepriteFile'), it represents the image of the frame used to 
create it.

The most common methods for creating a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') will be either by using the 
[SpriteProcessor](SpriteProcessor.md 'MonoGame.Aseprite.Content.Processors.SpriteProcessor') to create an instance from a frame in
your Aseprite File, or by using a [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas') to create a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') from one of
the regions in the atlas.  An instance can also be created manually using the constructor for a more general
purpose use.

```csharp
public class Sprite
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') ➡️ Sprite

Derived  
&#8627; [AnimatedSprite](AnimatedSprite.md 'MonoGame.Aseprite.Sprites.AnimatedSprite')

### Example
The following example demonstrates how to create a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') using a
[SpriteProcessor](SpriteProcessor.md 'MonoGame.Aseprite.Content.Processors.SpriteProcessor').

```csharp
//  Load an Aseprite file
AsepriteFile aseFile = AsepriteFile.Load("path-to-file");

//  Use the SpriteProcessor to create a Sprite
Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
```

The following example demonstrates how to create a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') from a [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas').

```csharp
//  Load an Aseprite File
AsepriteFile aseFile = AsepriteFile.Load("path-to-file")

//  Create a TextureAtlas from the AsepriteFile using the TextureAtlasProcessor
TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);

//  Create a Sprite from region 0 in the TextureAtlas
Sprite sprite = atlas.CreateSprite(regionIndex: 0);
```

The following example demonstrates how to create a [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') from a [SpriteSheet](SpriteSheet.md 'MonoGame.Aseprite.Sprites.SpriteSheet').

```csharp
//  Load an Aseprite File
AsepriteFile aseFile = AsepriteFile.Load("path-to-file")

//  Create a SpriteSheet from the AsepriteFile using the SpriteSheetProcessor
SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);

//  Create a Sprite from region 0 in the SpriteSheet
Sprite sprite = spriteSheet.CreateSprite(regionIndex: 0);
```

### Remarks

The [Color](Sprite.Color.md 'MonoGame.Aseprite.Sprites.Sprite.Color'), [Origin](Sprite.Origin.md 'MonoGame.Aseprite.Sprites.Sprite.Origin'), [Rotation](Sprite.Rotation.md 'MonoGame.Aseprite.Sprites.Sprite.Rotation'),
[Scale](Sprite.Scale.md 'MonoGame.Aseprite.Sprites.Sprite.Scale'), and [LayerDepth](Sprite.LayerDepth.md 'MonoGame.Aseprite.Sprites.Sprite.LayerDepth') are passed automatically to the
[Microsoft.Xna.Framework.Graphics.SpriteBatch](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteBatch 'Microsoft.Xna.Framework.Graphics.SpriteBatch') when rendering this sprite. For one-off rendering
where you can override the parameter values passed to the
[Microsoft.Xna.Framework.Graphics.SpriteBatch](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteBatch 'Microsoft.Xna.Framework.Graphics.SpriteBatch'), you can render the
[TextureRegion](Sprite.TextureRegion.md 'MonoGame.Aseprite.Sprites.Sprite.TextureRegion') instead.

### Performance Considerations
                

If you plan to create multiple [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') instances from various frames in your Aseprite file,
consider first creating a [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas'), then creating each [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') instance
using the [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas').  By doing this, you will be generating a single source
[Microsoft.Xna.Framework.Graphics.Texture2D](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.Texture2D 'Microsoft.Xna.Framework.Graphics.Texture2D') for the [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas').  Each
[Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') that is then created from the [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas') will be references the single
source [Microsoft.Xna.Framework.Graphics.Texture2D](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.Texture2D 'Microsoft.Xna.Framework.Graphics.Texture2D') instead of separate [Microsoft.Xna.Framework.Graphics.Texture2D](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.Texture2D 'Microsoft.Xna.Framework.Graphics.Texture2D') instances per 
[Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite').

This is beneficial because it reduces the amount of texture swapping done on the
[Microsoft.Xna.Framework.Graphics.SpriteBatch](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteBatch 'Microsoft.Xna.Framework.Graphics.SpriteBatch') when rendering the [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite')
instances.

### See Also
- [SpriteProcessor](SpriteProcessor.md 'MonoGame.Aseprite.Content.Processors.SpriteProcessor')
- [SpriteSheet](SpriteSheet.md 'MonoGame.Aseprite.Sprites.SpriteSheet')
- [TextureAtlas](TextureAtlas.md 'MonoGame.Aseprite.Sprites.TextureAtlas')
- [TextureRegion](Sprite.TextureRegion.md 'MonoGame.Aseprite.Sprites.Sprite.TextureRegion')
- [Microsoft.Xna.Framework.Graphics.Texture2D](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.Texture2D 'Microsoft.Xna.Framework.Graphics.Texture2D')
- [Microsoft.Xna.Framework.Graphics.SpriteBatch](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteBatch 'Microsoft.Xna.Framework.Graphics.SpriteBatch')

| Constructors | |
| :--- | :--- |
| [Sprite(string, Texture2D)](Sprite.Sprite(string,Texture2D).md 'MonoGame.Aseprite.Sprites.Sprite.Sprite(string, Microsoft.Xna.Framework.Graphics.Texture2D)') | Initializes a new instance of the [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') class. |
| [Sprite(string, TextureRegion)](Sprite.Sprite(string,TextureRegion).md 'MonoGame.Aseprite.Sprites.Sprite.Sprite(string, MonoGame.Aseprite.TextureRegion)') | Initializes a new instance of the [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') class. |

| Properties | |
| :--- | :--- |
| [Color](Sprite.Color.md 'MonoGame.Aseprite.Sprites.Sprite.Color') | Gets or Sets the color mask to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [FlipHorizontally](Sprite.FlipHorizontally.md 'MonoGame.Aseprite.Sprites.Sprite.FlipHorizontally') | Gets or Sets a value that indicates whether to flip this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') horizontally when rendering. |
| [FlipVertically](Sprite.FlipVertically.md 'MonoGame.Aseprite.Sprites.Sprite.FlipVertically') | Gets or Sets a value that indicates whether to flip this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') vertically when rendering. |
| [IsVisible](Sprite.IsVisible.md 'MonoGame.Aseprite.Sprites.Sprite.IsVisible') | Gets or Sets a value that indicates if this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') is visible and can be rendered. |
| [LayerDepth](Sprite.LayerDepth.md 'MonoGame.Aseprite.Sprites.Sprite.LayerDepth') | Gets or Sets the layer depth to render this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') at. |
| [Name](Sprite.Name.md 'MonoGame.Aseprite.Sprites.Sprite.Name') | Gets the name assigned to this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [Origin](Sprite.Origin.md 'MonoGame.Aseprite.Sprites.Sprite.Origin') | Gets or Sets the x- and y-coordinate point of origin to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [OriginX](Sprite.OriginX.md 'MonoGame.Aseprite.Sprites.Sprite.OriginX') | Gets or Sets the x-coordinate point of origin to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [OriginY](Sprite.OriginY.md 'MonoGame.Aseprite.Sprites.Sprite.OriginY') | Gets or Sets the y-coordinate point of origin to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [Rotation](Sprite.Rotation.md 'MonoGame.Aseprite.Sprites.Sprite.Rotation') | Gets or Sets the rotation, in radians, to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [Scale](Sprite.Scale.md 'MonoGame.Aseprite.Sprites.Sprite.Scale') | Gets or Sets the x- and y-axis scale factor to use when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [ScaleX](Sprite.ScaleX.md 'MonoGame.Aseprite.Sprites.Sprite.ScaleX') | Gets or Sets the x-axis scale factor to use when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [ScaleY](Sprite.ScaleY.md 'MonoGame.Aseprite.Sprites.Sprite.ScaleY') | Gets or Sets the y-axis scale factor to use when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [SpriteEffects](Sprite.SpriteEffects.md 'MonoGame.Aseprite.Sprites.Sprite.SpriteEffects') | Gets or Sets the [Microsoft.Xna.Framework.Graphics.SpriteEffects](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteEffects 'Microsoft.Xna.Framework.Graphics.SpriteEffects') to apply for vertical and  horizontal flipping when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [TextureRegion](Sprite.TextureRegion.md 'MonoGame.Aseprite.Sprites.Sprite.TextureRegion') | Gets the source [TextureRegion](Sprite.TextureRegion.md 'MonoGame.Aseprite.Sprites.Sprite.TextureRegion') of this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [Transparency](Sprite.Transparency.md 'MonoGame.Aseprite.Sprites.Sprite.Transparency') | Gets or Sets the level of transparency, between 0.0f, and 1.0f, to apply when rendering this  [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |

| Methods | |
| :--- | :--- |
| [Draw(SpriteBatch, Vector2)](Sprite.Draw(SpriteBatch,Vector2).md 'MonoGame.Aseprite.Sprites.Sprite.Draw(Microsoft.Xna.Framework.Graphics.SpriteBatch, Microsoft.Xna.Framework.Vector2)') | Renders this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite'). |
| [FromRaw(GraphicsDevice, RawSprite)](Sprite.FromRaw(GraphicsDevice,RawSprite).md 'MonoGame.Aseprite.Sprites.Sprite.FromRaw(Microsoft.Xna.Framework.Graphics.GraphicsDevice, MonoGame.Aseprite.RawTypes.RawSprite)') | Creates a new instance of the [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') class from the given [MonoGame.Aseprite.RawTypes.RawSprite](https://docs.microsoft.com/en-us/dotnet/api/MonoGame.Aseprite.RawTypes.RawSprite 'MonoGame.Aseprite.RawTypes.RawSprite'). |
