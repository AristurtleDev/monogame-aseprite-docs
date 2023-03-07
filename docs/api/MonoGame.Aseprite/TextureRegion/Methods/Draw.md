---
title: TextureRegion.Draw Method
sidebar_label: Draw

---

**Declaring Type:** [TextureRegion](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                                                                                                                                                    | Description                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| [Draw(SpriteBatch, Rectangle, Color)](#drawspritebatch-rectangle-color)                                                                                      | Draws this [TextureRegion](../) instance using the SpriteBatch provided. |
| [Draw(SpriteBatch, Rectangle, Color, float, Vector2, SpriteEffects, float)](#drawspritebatch-rectangle-color-float-vector2-spriteeffects-float)              | Draws this [TextureRegion](../) using the SpriteBatch provided.          |
| [Draw(SpriteBatch, Vector2, Color)](#drawspritebatch-vector2-color)                                                                                          | Draws this [TextureRegion](../) instance using the SpriteBatch provided. |
| [Draw(SpriteBatch, Vector2, Color, float, Vector2, Vector2, SpriteEffects, float)](#drawspritebatch-vector2-color-float-vector2-vector2-spriteeffects-float) | Draws this [TextureRegion](../) using the SpriteBatch provided.          |
| [Draw(SpriteBatch, Vector2, Color, float, Vector2, float, SpriteEffects, float)](#drawspritebatch-vector2-color-float-vector2-float-spriteeffects-float)     | Draws this [TextureRegion](../) using the SpriteBatch provided.          |

## Draw(SpriteBatch, Rectangle, Color)

Draws this [TextureRegion](../) instance using the SpriteBatch provided.

```csharp
public void Draw(SpriteBatch spriteBatch, Rectangle destinationRectangle, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`destinationRectangle`  Rectangle

A rectangular bound that defines the destination to render this [TextureRegion](../) into.

`color`  Color

The color mask to apply when rendering this [TextureRegion](../).

## Draw(SpriteBatch, Rectangle, Color, float, Vector2, SpriteEffects, float)

Draws this [TextureRegion](../) using the SpriteBatch provided.

```csharp
public void Draw(SpriteBatch spriteBatch, Rectangle destinationRectangle, Color color, float rotation, Vector2 origin, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`destinationRectangle`  Rectangle

A rectangular bound that defines the destination to render this [TextureRegion](../) into.

`color`  Color

The color mask to apply when rendering this [TextureRegion](../).

`rotation`  float

The amount of rotation, in radians, to apply when rendering this [TextureRegion](../).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering this [TextureRegion](../).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering this [TextureRegion](../).

`layerDepth`  float

The layer depth to apply when rendering this [TextureRegion](../).

## Draw(SpriteBatch, Vector2, Color)

Draws this [TextureRegion](../) instance using the SpriteBatch provided.

```csharp
public void Draw(SpriteBatch spriteBatch, Vector2 position, Color color);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`position`  Vector2

The x\- and y\-coordinate location to render this [TextureRegion](../) at.

`color`  Color

The color mask to apply when rendering this [TextureRegion](../).

## Draw(SpriteBatch, Vector2, Color, float, Vector2, Vector2, SpriteEffects, float)

Draws this [TextureRegion](../) using the SpriteBatch provided.

```csharp
public void Draw(SpriteBatch spriteBatch, Vector2 position, Color color, float rotation, Vector2 origin, Vector2 scale, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`position`  Vector2

The x\- and y\-coordinate location to render this [TextureRegion](../) at.

`color`  Color

The color mask to apply when rendering this [TextureRegion](../).

`rotation`  float

The amount of rotation, in radians, to apply when rendering this [TextureRegion](../).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering this [TextureRegion](../).

`scale`  Vector2

The amount of scaling to apply when rendering this [TextureRegion](../).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering this [TextureRegion](../).

`layerDepth`  float

The layer depth to apply when rendering this [TextureRegion](../).

## Draw(SpriteBatch, Vector2, Color, float, Vector2, float, SpriteEffects, float)

Draws this [TextureRegion](../) using the SpriteBatch provided.

```csharp
public void Draw(SpriteBatch spriteBatch, Vector2 position, Color color, float rotation, Vector2 origin, float scale, SpriteEffects effects, float layerDepth);
```

### Parameters

`spriteBatch`  SpriteBatch

The SpriteBatch to use for rendering.

`position`  Vector2

The x\- and y\-coordinate location to render this [TextureRegion](../) at.

`color`  Color

The color mask to apply when rendering this [TextureRegion](../).

`rotation`  float

The amount of rotation, in radians, to apply when rendering this [TextureRegion](../).

`origin`  Vector2

The x\- and y\-coordinate point of origin to apply when rendering this [TextureRegion](../).

`scale`  float

The amount of scaling to apply when rendering this [TextureRegion](../).

`effects`  SpriteEffects

The SpriteEffects to apply for horizontal and vertical axis  flipping when rendering this [TextureRegion](../).

`layerDepth`  float

The layer depth to apply when rendering this [TextureRegion](../).

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
