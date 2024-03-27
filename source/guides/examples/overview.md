---
uid: Examples.Overview
_title: Examples Overview
_description: Overview of examples of using MonoGame.Aseprite
---

## Examples Overview
The `AsepriteFile` instance that is created when you load your Aseprite file contains the raw data of hte Aseprite file.  The information contained within this isntance is structured similar to how it is in Aseprite.  The information is granular and needs to be transformed into a more meaningful type that can be used in your MonoGame game.

Thsi is where the power of the **MonoGame.Aseprite** library comes into play. It provides several [out-of-the-box](https://en.wikipedia.org/wiki/Out_of_the_box_(feature)) types to handle these scenarios for you.  While they may not cover eery scenario, they have been designed to cover most.

> [!CAUTION]
> If you plan to work only with the `AsepriteFile` and not use the utility types from the `MonoGame.Aseprite` library provided, it might be more beneficial for you to use the [AsepriteDotNet](https://github.com/aristurtledev/asepritedotnet) base library instead.

## MonoGame.Aseprite Types
The following table provides a summary of each type provided in **MonoGame.Aseprite** and a link to the documentation showing an example of using that type in your game project.

| Type | Summary |
|---|---|
| [Sprite](./sprite.md) | A [Sprite](<xref:MonoGame.Aseprite.Sprite>) represents the texture created from a single frame in an Aseprite file. |
| [TextureAtlas](./textureatlas.md) | A [TextureAtlas](<xref:MonoGame.Aseprite.TextureAtlas>) contains all frames from the Aseprite file packed into a single `Texture2D` with defined [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>)s that provide the source rectangle for each frame. |
| [SpriteSheet](./spritesheet.md) | A [SpriteSheet](<xref:MonoGame.Aseprite.SpriteSheet>) contains a [TextureAtlas](<xref:MonoGame.Aseprite.TextureAtlas>) along with all of the animations based on the tags from the Aseprite file.  From here you can create [AnimatedSprite](<xref:MonoGame.Aseprite.AnimatedSprite>) instances for your animations.
| [Tileset](./tileset.md) | A [Tileset](<xref:MonoGame.Aseprite.Tileset>) contains a single tileset from the Aseprite file. |
| [Tilemap](./tilemap.md) | A [Tilemap](<xref:MonoGame.Aseprite.Tilemap>) represents a tilemap created from the tilemap layers of a single specified frame in the Aseprite file. |
| [AnimatedTilemap](./animated-tilemap.md) | An [AnimatedTilemap](<xref:MonoGame.Aseprite.AnimatedTilemap>) represents a tilemap that animates over multiple frames from the Aseprite file. |
