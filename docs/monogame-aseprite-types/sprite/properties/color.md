---
id: color
title: Sprite.Color Property
sidebar_label: Color
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary

Gets or Sets the color mask to apply when rendering this [Sprite](../).

```cs
public Microsoft.Xna.Framework.Color Color { get; set; }
```

### Property Value

[Microsoft.Xna.Framework.Color](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html)  
The color mask to apply when rendering this [Sprite](../).

## Examples

In the following example, in the [LoadContent](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_LoadContent) method, we first load an [AsepriteFile](../../aseprite-file/), then use the [SpriteProcessor](../../../processors/sprite-processor) to create a new [Sprite](../) from `frameIndex: 0`. Then we set the [Sprite.Color](./color) value to [Color.Red](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html#Microsoft_Xna_Framework_Color_Red).

Now when we draw the [Sprite](../) in the [Game.Draw](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_Draw_Microsoft_Xna_Framework_GameTime_) method, the color mask will be applied automatically when rendering with the [SpriteBatch](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html).

```cs {31} title="Set Sprite.Color Value" showLineNumbers
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

        //  Use the Sprite.Color property to change the color mask applied when rendering.
        _sprite.Color = Color.Red;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  Render the sprite. The color mask set will be applied automatically from the Sprite.Color property.
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