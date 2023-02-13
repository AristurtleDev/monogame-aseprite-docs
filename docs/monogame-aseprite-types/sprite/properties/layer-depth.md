---
id: layer-depth
title: Sprite.LayerDepth Property
sidebar_label: LayerDepth
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary
Gets or Sets the layer depth to render this[Sprite](../)  at.

```cs
public float LayerDepth { get; set; }
```

### Property Value

[System.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single?view=net-7.0)  
The layer depth to render this [Sprite](../) at.

## Examples

In the following example, in the [LoadContent](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html#Microsoft_Xna_Framework_Game_LoadContent) method, we first load an [AsepriteFile](../../aseprite-file/), then use the [SpriteProcessor](../../../processors/sprite-processor) to create a new [Sprite](../) from `frameIndex: 0`. Then we set the [Sprite.LayerDepth](./layer-depth) value to `0.0f`.


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

        //  Set the Sprite.LayerDepth to 0.0f.
        _sprite.LayerDepth = 0.0f;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  The sprite will render with layer depth 0 passed to the spritebatch automatically.
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
