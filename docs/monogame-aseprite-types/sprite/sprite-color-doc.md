---
id: sprite-color-doc-()[]
title: Sprite.Color Property
sidebar_label: Color
---

Gets or Sets the color mask to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite').

```csharp
public Microsoft.Xna.Framework.Color Color { get; set; }
```

#### Property Value
[Microsoft.Xna.Framework.Color](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Color 'Microsoft.Xna.Framework.Color')  
The color mask to apply when rendering this [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite').

### Example

In the following example, in the `LoadContent` method, we first load an [MonoGame.Aseprite.AsepriteFile](https://docs.microsoft.com/en-us/dotnet/api/MonoGame.Aseprite.AsepriteFile 'MonoGame.Aseprite.AsepriteFile'), then 
use the [SpriteProcessor](SpriteProcessor.md 'MonoGame.Aseprite.Content.Processors.SpriteProcessor') to create a new
[Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') from `frameIndex: 0`.  Then we set the [Color](Sprite.Color.md 'MonoGame.Aseprite.Sprites.Sprite.Color') value to 
`Color.Red`.

Then, when we draw the [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite') in the `Game.Draw` method, the color mask will be applied
automatically when rendering with the [Microsoft.Xna.Framework.Graphics.SpriteBatch](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.SpriteBatch 'Microsoft.Xna.Framework.Graphics.SpriteBatch').

```csharp
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

### See Also
- [MonoGame.Aseprite.AsepriteFile](https://docs.microsoft.com/en-us/dotnet/api/MonoGame.Aseprite.AsepriteFile 'MonoGame.Aseprite.AsepriteFile')
- [Sprite](Sprite.md 'MonoGame.Aseprite.Sprites.Sprite')
- [SpriteProcessor](SpriteProcessor.md 'MonoGame.Aseprite.Content.Processors.SpriteProcessor')