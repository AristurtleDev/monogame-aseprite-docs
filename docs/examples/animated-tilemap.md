---
title: AnimatedTilemap Example
sidebar_label: AnimatedTilemap Example
---

The example below demonstrates creating a new [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md) using an [AnimatedTilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor/AnimatedTilemapProcessor.md) and rendering it with the `SpriteBatch`.



```cs {3-5,11,28,31,37,49} title="AnimatedTilemap Example" showLineNumbers
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using MonoGame.Aseprite;
using MonoGame.Aseprite.Content.Processors;
using MonoGame.Aseprite.Tilemaps;

namespace AnimatedTilemapProcessorExample;

public class Game1 : Game
{
    private AnimatedTilemap _animatedTilemap;

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
        AsepriteFile aseFile = AsepriteFile.Load("townmap.aseprite");

        //  Use the AnimatedTilemapProcessor to process the AnimatedTilemap from the Aseprite file.
        _animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile);
    }

    protected override void Update(GameTime gameTime)
    {
        //  The AnimatedTilemap needs to be updated each frame to actually animate.
        _animatedTilemap.Update(gameTime);

        base.Update(gameTime);
    }

    protected override void Draw(GameTime gameTime)
    {
        GraphicsDevice.Clear(Color.CornflowerBlue);

        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  Draw the AnimatedTilemap.
        _animatedTilemap.Draw(_spriteBatch, position: Vector2.Zero, color: Color.White);

        _spriteBatch.End();

        base.Draw(gameTime);
    }
}
```