---
id: flip-vertically
title: Sprite.FlipVertically Property
sidebar_label: FlipVertically
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary
Gets or Sets a value that indicates whether to flip this [Sprite](../) vertically when rendering.

```cs
public bool FlipVertically { get; set; }
```

### Property Value

[System.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean?view=net-7.0)  
When `true`, this [Sprite](../) will be flipped vertically when rendered.


### Remarks
Setting this has the same effects as setting [SpriteEffects.FlipVertically](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteEffects.html) flag for the [Sprite.SpriteEffects](./sprite-effects) property.

## Examples

In the following example, in the [LoadContent](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_LoadContent) method, we first load an [AsepriteFile](../../aseprite-file/), then use the [SpriteProcessor](../../../processors/sprite-processor) to create a new [Sprite](../) from `frameIndex: 0`. Then we set the [Sprite.FlipVertically](./flip-vertically) value to `true`.

Now when we draw the [Sprite](../) in the [Game.Draw](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_Draw_Microsoft_Xna_Framework_GameTime_) method, the [Sprite](../) will be flipped vertically when rendering with the [SpriteBatch](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html).

```cs {31} title="Set Sprite.FlipVertically" showLineNumbers
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

        //  Use the Sprite.FlipVertically to flip the sprite.
        _sprite.FlipVertically = true;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  The sprite will be flipped vertically or not based on the value set for the property when rendered.
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