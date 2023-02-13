---
id: create-spritesheet
title: Create a SpriteSheet
sidebar_label: Create a SpriteSheet
---

This document provides a quick start example to create a `SpriteSheet` from an `AsepriteFile`. It also provides an example for using the `SpriteSheet` to create `AnimatedSprite` instances.

:::info

The `SpriteSheet` class is a wrapper around the `TextureAtlas` class. It provides additional details for animations and creating `AnimatedSprite` instances

The animation details are called `AnimationTag` and are automatically created from the Tags you defined in your Aseprite file.

:::

## Prerequisites

- [Install `MonoGame.Aseprite`](./installation)

## Example

```csharp
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

/////////////////////////////////////////////////////////////
///
///  Add these using statements
///
/////////////////////////////////////////////////////////////
using MonoGame.Aseprite;
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Processors;

public class MyGame : Game
{
    private SpriteSheet _atlas;
    private AnimatedSprite _idleAnimation;
    private AnimatedSprite _walkingAnimation;
    bool _isWalking = false;

    private SpriteBatch _spriteBatch;

    // other code removed for brevity

    protected override void LoadContent()
    {
        _spriteBatch = new(GraphicsDevice);

        /////////////////////////////////////////////////////////////
        ///
        ///  Load the Aseprite file.
        ///
        /////////////////////////////////////////////////////////////
        AsepriteFile aseFile = AsepriteFile.Load("path/to/aseprite/file.aseprite");

        /////////////////////////////////////////////////////////////
        ///
        ///  If you imported it with the MGCB Editor, load the
        ///  Aseprite file using the ContentManager instead like shown
        ///  below.
        ///
        /////////////////////////////////////////////////////////////
        // AsepriteFile aseFile = Content.Load<AsepriteFile>("file");

        /////////////////////////////////////////////////////////////
        ///
        /// Use the SpriteSheetProcessor to create the SpriteSheet.
        ///
        /////////////////////////////////////////////////////////////
        _spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also supply additional optional parameters to
        ///  control how the processor generates the source Texture2D
        ///  image for the SpriteSheet
        ///
        ///  - onlyVisibleLayers:
        ///         Indicates if only cels on visible layers should be included.
        ///  - includeBackgroundLayer:
        ///         Indicates if cels on a layer marked as the background layer should be included.
        ///  - includeTilemapLayers:
        ///         Indicates if tilemap cels on tilemap layers should be included.
        ///  - mergeDuplicates:
        ///         Indicates if duplicate frames should be merged into one for the source image.
        ///  - borderPadding:
        ///         The amount of transparent pixels to add to the edge of the generated source image.
        ///  - spacing:
        ///         The amount of transparent pixels to add between each frame in the generated source image.
        ///  - innerPadding:
        ///         The amount of transparent pixels to add around each frame in the generated source image.
        ///
        /////////////////////////////////////////////////////////////
        /*
        _spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile, onlyVisibleLayers: true,
                                                                             includeBackgroundLayer: false,
                                                                             includeTilemapLayers: true,
                                                                             mergeDuplicates: true,
                                                                             borderPadding: 0,
                                                                             spacing: 0,
                                                                             innerPadding: 0);
        */

        /////////////////////////////////////////////////////////////
        ///
        ///  Create AnimatedSprite instances using the Tags that were
        ///  imported from you Aseprite file.  Just give it the name
        ///  you assigned the Tag in Aseprite.
        ///
        /////////////////////////////////////////////////////////////
        _idleAnimation = _spriteSheet.CreateAnimatedSprite("idle");
        _walkingAnimation = _spritesheet.CreateAnimatedSprite("walking");
    }

    protected override void Update(GameTime gameTime)
    {
        /////////////////////////////////////////////////////////////
        ///
        ///  In order for the AnimatedSprite to actually animate,
        ///  it needs to be updated every frame
        ///
        /////////////////////////////////////////////////////////////
        if(_isWalking)
        {
            _walkingAnimation.Update(gameTime);
        }
        else
        {
            _idleAnimation.Update(gameTime);
        }

        /////////////////////////////////////////////////////////////
        ///
        ///  You can use branch logic with if statements above to control
        ///  when you update the animation, or you can use animation
        ///  controls for the object itself like shown below.
        ///
        /////////////////////////////////////////////////////////////
        /*
         _walkingAnimation.Pause(resetFrameDuration: false);
         _walkingAnimation.Unpause(advanceToNextFrame: false);
         _walkingAnimation.Stop();
         _walkingAnimation.Reset(paused: false);
         */
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        if(_isWalking)
        {
            /////////////////////////////////////////////////////////////
            ///
            ///  An AnimatedSprite inherits from the Sprite class, so it
            ///  has all of the same properties that can be adjusted for
            ///  how it's rendered that get automatically passed into the
            ///  spritebatch, so you only have to call the Draw method
            ///  like so
            /////////////////////////////////////////////////////////////
            _walkingAnimation.Draw(_spriteBatch, position: new Vector2(10, 20));
        }
        else
        {
            /////////////////////////////////////////////////////////////
            ///
            ///  Additionally, just like with the Sprite, you can override
            ///  the properties that are passed to the SpriteBatch by using
            ///  the AnimatedSpriteTextureRegion property and supplying the
            ///  parameters yourself.
            ///
            ///  For an AnimatedSprite, the AnimatedSprite.TextureRegion
            ///  property will always be the TextureRegion of the current
            ///  frame of animation.
            /////////////////////////////////////////////////////////////
            _spriteBatch.Draw(_idleAnimation.TextureRegion, position: new Vector2(50, 60),
                                                            color: Color.White,
                                                            rotation: 0.0f,
                                                            origin: Vector.Zero,
                                                            scale: Vector2.One,
                                                            effects: SpriteEffects.None,
                                                            layerDepth: 0.0f);
        }

        _spriteBatch.End();
    }
}
```

:::tip

For more information on the `SpriteSheet` class, including creating one manually without an `AsepriteFile`, see the [SpriteSheet Guide]

:::
