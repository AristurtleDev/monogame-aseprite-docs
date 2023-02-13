---
id: is-visible
title: Sprite.IsVisible Property
sidebar_label: IsVisible
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary
Gets or Sets a value that indicates if this [Sprite](../) is visible and can be rendered.

```cs
public bool IsVisible { get; set; }
```

### Property Value

[System.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean?view=net-7.0)  
When `true`, this [Sprite](../) is visible and can be rendered by the [SpriteBatch](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html).

### Remarks
This value only affects the rendering of this [Sprite](../) when it is rendered using the [Sprite.Draw](../methods/draw) method or the [SpriteBatch.Draw](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html) extension method provided by the `MonoGame.Aseprite` library.  

It is still possible to render the [Sprite.TextureRegion](./texture-region) to bypass this property.
Setting this has the same effects as setting [SpriteEffects.FlipVertically](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteEffects.html) flag for the [Sprite.SpriteEffects](./sprite-effects) property.

## Examples

In the following example, in the [LoadContent](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_LoadContent) method, we first load an [AsepriteFile](../../aseprite-file/), then use the [SpriteProcessor](../../../processors/sprite-processor) to create a new [Sprite](../) from `frameIndex: 0`. Then we set the [Sprite.IsVisible](./is-visible) value to `false`.

Now when we attempt to draw the [Sprite](../) in the [Game.Draw](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_Draw_Microsoft_Xna_Framework_GameTime_) method, the [Sprite](../) will not be rendered because it was set as invisible.

```cs {31} title="Set Sprite.IsVisible" showLineNumbers
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using MonoGame.Aseprite;
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Processors;

namespace Example;

public class ExampleGame : Game
{
    private SpriteBatch _spriteBatch;
    private GraphicsDeviceManager _graphics;

    private Sprite _sprite;


    public ExampleGame()
    {
        _graphics = new(this);
        Content.RootDirectory = "Content";
    }

    protected override void LoadContent()
    {
        _spriteBatch = new(GraphicsDevice);

        AsepriteFile aseFile = AsepriteFile.Load("path-to-file");
        _sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);

        //  Use the Sprite.IsVisible property to make the sprite invisible by setting it to false.
        _sprite.IsVisible = false;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  The sprite will not be rendered because we set IsVisible to false.
        _sprite.Draw(_spriteBatch, position: Vector2.Zero);

        _spriteBatch.End();
    }
}
```

## See Also

- `MonoGame.Aseprite` References
  - [AsepriteFile](../../aseprite-file/)
  - [Sprite](../)
  - [SpriteProcessor](../../../processors/sprite-processor)
- MonoGame Framework References
  - [Color](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html)
  - [Game](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html)
  - [SpriteBatch](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html)
  - [SpriteEffects](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteEffects.html)
