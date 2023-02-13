---
id: name
title: Sprite.Name Property
sidebar_label: Name
toc_max_heading_level: 2
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

## Summary
Gets the name assigned to this [Sprite](../).


```cs
public string LayerDepth { get; set; }
```

### Property Value

[System.String](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-7.0)  
The name assigned to this [Sprite](../).

### Remarks
When initializing an instance of the [Sprite](../) class manually, the [Sprite.Name](./name) value is whatever value you gave for the `name` property when you call the [constructor](../constructors). 

When creating a [Sprite](../) using the [SpriteProcessor](../../../processors/sprite-processor), the name assigned follows the format of `[fileName]_[frameIndex]` where `[filename]` is the name of the Aseprite file that was loaded, without extension, and `[frameIndex]` is the index of the frame you create the [Sprite](../) from.  For instance, if your Aseprite file was called "mySprite.aseprite" and you used frame index "0", then the [Sprite.Name](./name) will be `mySprite_0`.

When creating a [Sprite](../) from the [SpriteSheet.CreateSprite](../../sprite-sheet/methods/create-sprite) method or the [TextureAtlas.CreateSprite](../../texture-atlas/methods/create-sprite) method, then the [Sprite.Name](./name) value will follow the format of `[spriteSheetOrAtlasName]_[regionIndex]` where `[spriteSheetOrAtlasName]` is equal to the name of the [SpriteSheet](../../sprite-sheet/) or [TextureAtlas](../../texture-atlas/) and `[regionIndex]` is index of hte region you specified to create the sprite from.


## See Also

- `MonoGame.Aseprite` References
  - [Sprite](../)
  - [SpriteProcessor](../../../processors/sprite-processor)
  - [SpriteSheet](../../sprite-sheet/)
  - [TextureAtlas](../../texture-atlas/)
