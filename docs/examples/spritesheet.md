---
title: SpriteSheet Example
sidebar_label: SpriteSheet Example
---

The example below demonstrates creating a new [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) using a [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md), creating [AnimatedSprite](../api/MonoGame.Aseprite/Sprites/AnimatedSprite/AnimatedSprite.md)s from it,  and rendering them with the `SpriteBatch`.

```cs {3-5,11,13-15,32,35,40-42,50-52,62-64} title="SpriteSheet Example" showLineNumbers
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using MonoGame.Aseprite;
using MonoGame.Aseprite.Content.Processors;
using MonoGame.Aseprite.Sprites;

namespace SpriteSheetProcessorExample;

public class Game1 : Game
{
    private SpriteSheet _spriteSheet;

    private AnimatedSprite _attackCycle;
    private AnimatedSprite _runCycle;
    private AnimatedSprite _walkCycle;

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

        //  Use the SpriteSheetProcessor to process the SpriteSheet from the Aseprite file.
        _spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);

        //  Create the AnimatedSprite using the SpriteSheet.
        //  The name of the Tags you added in Aseprite are the names of the 
        //  AnimationTags in the SpriteSheet.
        _walkCycle = _spriteSheet.CreateAnimatedSprite("walk");
        _runCycle = _spriteSheet.CreateAnimatedSprite("run");
        _attackCycle = _spriteSheet.CreateAnimatedSprite("attack");

        //  Starting with version 5.0.0, AnimatedSprite instances must be told to play
        _walkCycle.Play();
        _runCycle.Play();
        _attackCycle.Play();
    }

    protected override void Update(GameTime gameTime)
    {
        base.Update(gameTime);

        //  The animated sprite needs to be updated in order for it to actually animated
        _attackCycle.Update(gameTime);
        _walkCycle.Update(gameTime);
        _runCycle.Update(gameTime);
    }

    protected override void Draw(GameTime gameTime)
    {
        GraphicsDevice.Clear(Color.CornflowerBlue);

        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        //  Draw the AnimatedSprite
        _attackCycle.Draw(_spriteBatch, position: new Vector2(10, 10));
        _walkCycle.Draw(_spriteBatch, position: new Vector2(_attackCycle.Width, 10));
        _runCycle.Draw(_spriteBatch, position: new Vector2(_attackCycle.Width * 2, 10));

        _spriteBatch.End();

        base.Draw(gameTime);
    }
}
```