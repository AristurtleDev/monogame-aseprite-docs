---

title: SpriteBatchExtensions.Draw Method
sidebar_label: Draw
---
**Declaring Type:** [SpriteBatchExtensions](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                                                                                                                                                 | Description                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Draw(SpriteBatch, AnimatedTilemap, Vector2, Color)](#drawspritebatch-animatedtilemap-vector2-color)                                                                                      | Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch. |
| [Draw(SpriteBatch, AnimatedTilemap, Vector2, Color, Vector2, float)](#drawspritebatch-animatedtilemap-vector2-color-vector2-float)                                                        | Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch. |
| [Draw(SpriteBatch, AnimatedTilemap, Vector2, Color, float, float)](#drawspritebatch-animatedtilemap-vector2-color-float-float)                                                            | Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch. |
| [Draw(SpriteBatch, Sprite, Vector2)](#drawspritebatch-sprite-vector2)                                                                                                                     | Draws a [Sprite](../../Sprites/Sprite/) using the SpriteBatch.                     |
| [Draw(SpriteBatch, TextureRegion, Rectangle, Color)](#drawspritebatch-textureregion-rectangle-color)                                                                                      | Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.               |
| [Draw(SpriteBatch, TextureRegion, Rectangle, Color, float, Vector2, SpriteEffects, float)](#drawspritebatch-textureregion-rectangle-color-float-vector2-spriteeffects-float)              | Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.               |
| [Draw(SpriteBatch, TextureRegion, Vector2, Color)](#drawspritebatch-textureregion-vector2-color)                                                                                          | Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.               |
| [Draw(SpriteBatch, TextureRegion, Vector2, Color, float, Vector2, Vector2, SpriteEffects, float)](#drawspritebatch-textureregion-vector2-color-float-vector2-vector2-spriteeffects-float) | Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.               |
| [Draw(SpriteBatch, TextureRegion, Vector2, Color, float, Vector2, float, SpriteEffects, float)](#drawspritebatch-textureregion-vector2-color-float-vector2-float-spriteeffects-float)     | Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.               |
| [Draw(SpriteBatch, Tilemap, Vector2, Color)](#drawspritebatch-tilemap-vector2-color)                                                                                                      | Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.                  |
| [Draw(SpriteBatch, Tilemap, Vector2, Color, Vector2, float)](#drawspritebatch-tilemap-vector2-color-vector2-float)                                                                        | Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.                  |
| [Draw(SpriteBatch, Tilemap, Vector2, Color, float, float)](#drawspritebatch-tilemap-vector2-color-float-float)                                                                            | Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.                  |
| [Draw(SpriteBatch, TilemapLayer, Vector2, Color)](#drawspritebatch-tilemaplayer-vector2-color)                                                                                            | Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.  |
| [Draw(SpriteBatch, TilemapLayer, Vector2, Color, Vector2, float)](#drawspritebatch-tilemaplayer-vector2-color-vector2-float)                                                              | Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.  |
| [Draw(SpriteBatch, TilemapLayer, Vector2, Color, float, float)](#drawspritebatch-tilemaplayer-vector2-color-float-float)                                                                  | Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.  |

## Draw(SpriteBatch, AnimatedTilemap, Vector2, Color)

Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, AnimatedTilemap animatedTilemap, Vector2 position, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`animatedTilemap`  [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/)

The [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) at.

`color`  Color

The color mask to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

## Draw(SpriteBatch, AnimatedTilemap, Vector2, Color, Vector2, float)

Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, AnimatedTilemap animatedTilemap, Vector2 position, Color color, Vector2 scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`animatedTilemap`  [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/)

The [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) at.

`color`  Color

The color mask to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`scale`  Vector2

The amount of scaling to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`layerDepth`  float

The layer depth to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

## Draw(SpriteBatch, AnimatedTilemap, Vector2, Color, float, float)

Draws an [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, AnimatedTilemap animatedTilemap, Vector2 position, Color color, float scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`animatedTilemap`  [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/)

The [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/) at.

`color`  Color

The color mask to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`scale`  float

The amount of scaling to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

`layerDepth`  float

The layer depth to apply when rendering the [AnimatedTilemap](../../Tilemaps/AnimatedTilemap/).

## Draw(SpriteBatch, Sprite, Vector2)

Draws a [Sprite](../../Sprites/Sprite/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, Sprite sprite, Vector2 position);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [Sprite](../../Sprites/Sprite/).

`sprite`  [Sprite](../../Sprites/Sprite/)

The [Sprite](../../Sprites/Sprite/) to render.

`position`  Vector2

The x\- and y\-coordinate location to render the [Sprite](../../Sprites/Sprite/) at.

## Draw(SpriteBatch, TextureRegion, Rectangle, Color)

Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TextureRegion region, Rectangle destinationRectangle, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`region`  [TextureRegion](../../TextureRegion/)

The [TextureRegion](../../TextureRegion/) to render.

`destinationRectangle`  Rectangle

A rectangular bound that defines the destination to render the [TextureRegion](../../TextureRegion/) into.

`color`  Color

The color mask to apply when rendering the [TextureRegion](../../TextureRegion/).

## Draw(SpriteBatch, TextureRegion, Rectangle, Color, float, Vector2, SpriteEffects, float)

Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TextureRegion region, Rectangle destinationRectangle, Color color, float rotation, Vector2 origin, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`region`  [TextureRegion](../../TextureRegion/)

The [TextureRegion](../../TextureRegion/) to render.

`destinationRectangle`  Rectangle

A rectangular bound that defines the destination to render the [TextureRegion](../../TextureRegion/) into.

`color`  Color

The color mask to apply when rendering the [TextureRegion](../../TextureRegion/).

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [TextureRegion](../../TextureRegion/).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering the [TextureRegion](../../TextureRegion/).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering the [TextureRegion](../../TextureRegion/).

`layerDepth`  float

The layer depth to apply when rendering the [TextureRegion](../../TextureRegion/).

## Draw(SpriteBatch, TextureRegion, Vector2, Color)

Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TextureRegion region, Vector2 position, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`region`  [TextureRegion](../../TextureRegion/)

The [TextureRegion](../../TextureRegion/) to render.

`position`  Vector2

The x\- and y\-coordinate location to render the [TextureRegion](../../TextureRegion/) at.

`color`  Color

The color mask to apply when rendering the [TextureRegion](../../TextureRegion/).

## Draw(SpriteBatch, TextureRegion, Vector2, Color, float, Vector2, Vector2, SpriteEffects, float)

Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TextureRegion region, Vector2 position, Color color, float rotation, Vector2 origin, Vector2 scale, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`region`  [TextureRegion](../../TextureRegion/)

The [TextureRegion](../../TextureRegion/) to render.

`position`  Vector2

The x\- and y\-coordinate location to render the [TextureRegion](../../TextureRegion/) at.

`color`  Color

The color mask to apply when rendering the [TextureRegion](../../TextureRegion/).

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [TextureRegion](../../TextureRegion/).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering the [TextureRegion](../../TextureRegion/).

`scale`  Vector2

The amount of scaling to apply when rendering the [TextureRegion](../../TextureRegion/).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering the [TextureRegion](../../TextureRegion/).

`layerDepth`  float

The layer depth to apply when rendering the [TextureRegion](../../TextureRegion/).

## Draw(SpriteBatch, TextureRegion, Vector2, Color, float, Vector2, float, SpriteEffects, float)

Draws a [TextureRegion](../../TextureRegion/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TextureRegion region, Vector2 position, Color color, float rotation, Vector2 origin, float scale, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`region`  [TextureRegion](../../TextureRegion/)

The [TextureRegion](../../TextureRegion/) to render.

`position`  Vector2

The x\- and y\-coordinate location to render the [TextureRegion](../../TextureRegion/) at.

`color`  Color

The color mask to apply when rendering the [TextureRegion](../../TextureRegion/).

`rotation`  float

The amount of rotation, in radians, to apply when rendering the [TextureRegion](../../TextureRegion/).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering the [TextureRegion](../../TextureRegion/).

`scale`  float

The amount of scaling to apply when rendering the [TextureRegion](../../TextureRegion/).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering the [TextureRegion](../../TextureRegion/).

`layerDepth`  float

The layer depth to apply when rendering the [TextureRegion](../../TextureRegion/).

## Draw(SpriteBatch, Tilemap, Vector2, Color)

Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, Tilemap tilemap, Vector2 position, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [Tilemap](../../Tilemaps/Tilemap/).

`tilemap`  [Tilemap](../../Tilemaps/Tilemap/)

The [Tilemap](../../Tilemaps/Tilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [Tilemap](../../Tilemaps/Tilemap/) at.

`color`  Color

The color mask to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

## Draw(SpriteBatch, Tilemap, Vector2, Color, Vector2, float)

Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, Tilemap tilemap, Vector2 position, Color color, Vector2 scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [Tilemap](../../Tilemaps/Tilemap/).

`tilemap`  [Tilemap](../../Tilemaps/Tilemap/)

The [Tilemap](../../Tilemaps/Tilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [Tilemap](../../Tilemaps/Tilemap/) at.

`color`  Color

The color mask to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

`scale`  Vector2

The amount of scaling to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

`layerDepth`  float

The layer depth to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

## Draw(SpriteBatch, Tilemap, Vector2, Color, float, float)

Draws a [Tilemap](../../Tilemaps/Tilemap/) using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, Tilemap tilemap, Vector2 position, Color color, float scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [Tilemap](../../Tilemaps/Tilemap/).

`tilemap`  [Tilemap](../../Tilemaps/Tilemap/)

The [Tilemap](../../Tilemaps/Tilemap/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to render the [Tilemap](../../Tilemaps/Tilemap/) at.

`color`  Color

The color mask to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

`scale`  float

The amount of scaling to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

`layerDepth`  float

The layer depth to apply when rendering the [Tilemap](../../Tilemaps/Tilemap/).

## Draw(SpriteBatch, TilemapLayer, Vector2, Color)

Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TilemapLayer layer, Vector2 position, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`layer`  [TilemapLayer](../../Tilemaps/TilemapLayer/)

The [TilemapLayer](../../Tilemaps/TilemapLayer/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to draw the [TilemapLayer](../../Tilemaps/TilemapLayer/) at.  Drawing the [TilemapLayer](../../Tilemaps/TilemapLayer/) using this method ignores the [Offset](../../Tilemaps/TilemapLayer/properties/Offset).

`color`  Color

The color mask to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

## Draw(SpriteBatch, TilemapLayer, Vector2, Color, Vector2, float)

Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TilemapLayer layer, Vector2 position, Color color, Vector2 scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`layer`  [TilemapLayer](../../Tilemaps/TilemapLayer/)

The [TilemapLayer](../../Tilemaps/TilemapLayer/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to draw the [TilemapLayer](../../Tilemaps/TilemapLayer/) at.  Drawing the [TilemapLayer](../../Tilemaps/TilemapLayer/) using this method ignores the [Offset](../../Tilemaps/TilemapLayer/properties/Offset).

`color`  Color

The color mask to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`scale`  Vector2

The amount of scaling to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`layerDepth`  float

The layer depth to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

## Draw(SpriteBatch, TilemapLayer, Vector2, Color, float, float)

Draws a [TilemapLayer](../../Tilemaps/TilemapLayer/) layer using the SpriteBatch.

```csharp
public static void Draw(this SpriteBatch spriteBatch, TilemapLayer layer, Vector2 position, Color color, float scale, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`layer`  [TilemapLayer](../../Tilemaps/TilemapLayer/)

The [TilemapLayer](../../Tilemaps/TilemapLayer/) to draw.

`position`  Vector2

The x\- and y\-coordinate location to draw the [TilemapLayer](../../Tilemaps/TilemapLayer/) at.  Drawing the [TilemapLayer](../../Tilemaps/TilemapLayer/) using this method ignores the [Offset](../../Tilemaps/TilemapLayer/properties/Offset).

`color`  Color

The color mask to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`scale`  float

The amount of scaling to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).

`layerDepth`  float

The layer depth to apply when rendering the [TilemapLayer](../../Tilemaps/TilemapLayer/).


