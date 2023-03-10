---
title: Sprite Example
sidebar_label: Sprite Example
---

The example below demonstrates creating a new [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) using a [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md) and rendering it with the `SpriteBatch`.

```cs {3-5,11,27,30,40} title="Sprite Example" showLineNumbers
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using MonoGame.Aseprite;
using MonoGame.Aseprite.Content.Processors;
using MonoGame.Aseprite.Sprites;

namespace SpriteProcessorExample;

public class Game1 : Game
{
    private Sprite _sprite;
    private GraphicsDeviceManager _graphics;
    private SpriteBatch _spriteBatch;

    public Game1()
    {
        _graphics = new GraphicsDeviceManager(this);
        Content.RootDirectory = "Content";
        IsMouseVisible = true;
    }

    protected override void LoadContent()
    {
        _spriteBatch = new SpriteBatch(GraphicsDevice);

        //  Load the Aseprite file
        AsepriteFile aseFile = AsepriteFile.Load("character.aseprite");

        //  Use the SpriteProcessor to process frame 0 of the Aseprite file as a Sprite
        _sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, aseFrameIndex: 0);
    }

    protected override void Draw(GameTime gameTime)
    {
        GraphicsDevice.Clear(Color.CornflowerBlue);

        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  Draw the sprite
        _sprite.Draw(_spriteBatch, position: new Vector2(10, 10));

        _spriteBatch.End();

        base.Draw(gameTime);
    }
}
```