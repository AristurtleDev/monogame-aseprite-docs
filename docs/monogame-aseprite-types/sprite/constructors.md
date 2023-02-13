---
id: constructors
title: Sprite Constructors
sidebar_label: Constructors
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary

Initializes a new instance of the [Sprite](./) class.

## Overloads

| Overloads                                                    |                                                                                                                                                                             |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sprite(string, Texture2D)](#spritestring-texture2d)         | Initializes a new instance of the [Sprite](./) class using an existing [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) instance. |
| [Sprite(string, TextureRegion)](#spritestring-textureregion) | Initializes a new instance of the [Sprite](./) class using an existing [TextureRegion](../texture-region/) instance                                                         |

## Sprite(string, Texture2D)

Initializes a new instance of the [Sprite](./) class using an existing [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) instance.

```cs
public Sprite(System.String name, Microsoft.Xna.Framework.Graphics.Texture2D texture);
```

### Parameters

`name` [System.String](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-7.0)  
The name to assign the [Sprite](./)

`texture` [Microsoft.Xna.Framework.Graphics.Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html)  
An existing [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) to assign as the source image of the [Sprite](./)

### Examples

The following example demonstrates loading a [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) using the [ContentManager](https://docs.monogame.net/api/Microsoft.Xna.Framework.Content.ContentManager.html), then using the [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) to create a new [Sprite](./)

```cs title="Create Sprite from Texture2D" showLineNumbers
protected override void LoadContent()
{
    Texture2D texture = Content.Load<Texture2D>("texture");
    Sprite sprite = new(name: "sprite", texture: texture);
}
```

## Sprite(string, TextureRegion)

Initializes a new instance of the [Sprite](./) class using an existing [TextureRegion](../texture-region/) instance

```cs
public Sprite(System.String name, MonoGame.Aseprite.TextureRegion textureRegion);
```

### Parameters

`name` [System.String](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-7.0)  
The name to assign the [Sprite](./)

`textureRegion` [MonoGame.Aseprite.TextureRegion](../texture-region/)  
An existing [TextureRegion](../texture-region/) to assign as the source image of the [Sprite](./)

### Examples

The following example demonstrates loading a [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) using the [ContentManager](https://docs.monogame.net/api/Microsoft.Xna.Framework.Content.ContentManager.html), using the [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) to create a new [TextureRegion](../texture-region/), then using the [TextureRegion](../texture-region/) to create a new [Sprite](./)

```cs title="Create Sprite from TextureRegion" showLineNumbers
protected override void LoadContent()
{
    Texture2D texture = Content.Load<Texture2D>("texture");
    TextureRegion region = new(name: "region", texture: texture, bounds: texture.Bounds)
    Sprite sprite = new(name: "sprite", textureRegion: region);
}
```

## See Also

- `MonoGame.Aseprite` References
  - [Sprite](/.sprite)
  - [TextureRegion](../texture-region/)
- MonoGame Framework References
  - [ContentManager](https://docs.monogame.net/api/Microsoft.Xna.Framework.Content.ContentManager.html)
  - [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html)
