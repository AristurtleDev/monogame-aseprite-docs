---
title: Tilemap Example
sidebar_label: Tilemap Example
---

The example below demonstrates creating a new [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) using a [TilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/TilemapProcessor.md) and then rendering it with the `SpriteBatch`.

```cs {3-5,11,28,31,41} title="Tilemap Example" showLineNumbers
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using MonoGame.Aseprite;
using MonoGame.Aseprite.Content.Processors;
using MonoGame.Aseprite.Tilemaps;

namespace TilemapProcessorExample;

public class Game1 : Game
{
    private Tilemap _tilemap;

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

        //  Use the TilemapProcessor to process the Tilemap from the Aseprite file.
        _tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
    }

    protected override void Draw(GameTime gameTime)
    {
        GraphicsDevice.Clear(Color.CornflowerBlue);

        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  Draw the tilemap
        _tilemap.Draw(_spriteBatch, position: Vector2.Zero, color: Color.White);

        _spriteBatch.End();

        base.Draw(gameTime);
    }
}
```