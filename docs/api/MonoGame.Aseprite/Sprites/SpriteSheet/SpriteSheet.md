---
title: SpriteSheet Class
sidebar_label: SpriteSheet

---

**Namespace:** [MonoGame.Aseprite.Sprites](../)  
**Assembly:** MonoGame.Aseprite

Defines a spritesheet with a source [TextureAtlas](Properties/TextureAtlas.md) and methods for creating [Sprite](../Sprite/)and [AnimatedSprite](../AnimatedSprite/) elements.

```csharp
public sealed class SpriteSheet
```

**Inheritance:** object → SpriteSheet

## Constructors

| Name                                                       | Description                                          |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| [SpriteSheet(string, TextureAtlas)](Constructors/) | Initializes a new instance of the SpriteSheet class. |

## Properties

| Name                                                 | Description                                                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [AnimationTagCount](Properties/AnimationTagCount.md) | Gets the total number of [AnimationTag](../AnimationTag/) elements that have been defined for thisSpriteSheet. |
| [Name](Properties/Name.md)                           | Gets the name assigned to this SpriteSheet.                                                                            |
| [TextureAtlas](Properties/TextureAtlas.md)           | Gets the source [TextureAtlas](Properties/TextureAtlas.md) of this SpriteSheet.                                        |

## Methods

| Name                                                                                       | Description                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ContainsAnimationTag(string)](Methods/ContainsAnimationTag.md)                            | Returns a value that indicates whether this SpriteSheet contains an [AnimationTag](../AnimationTag/)with the specified name.                                                           |
| [CreateAnimatedSprite(string)](Methods/CreateAnimatedSprite.md)                            | Creates a new [AnimatedSprite](../AnimatedSprite/) using the [AnimationTag](../AnimationTag/) element with the specified name in this SpriteSheet.                             |
| [CreateAnimationTag(string, Action\<AnimationTagBuilder\>)](Methods/CreateAnimationTag.md) | Creates a new [AnimationTag](../AnimationTag/) and adds it to this SpriteSheet.                                                                                                        |
| [CreateSprite(int)](Methods/CreateSprite.md#createspriteint)                               | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in the [TextureAtlas](Properties/TextureAtlas.md) of this SpriteSheet. |
| [CreateSprite(string)](Methods/CreateSprite.md#createspritestring)                         | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in the [TextureAtlas](Properties/TextureAtlas.md) of this SpriteSheet. |
| [CreateSprite(string, int)](Methods/CreateSprite.md#createspritestring-int)                | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in the [TextureAtlas](Properties/TextureAtlas.md) of this SpriteSheet. |
| [CreateSprite(string, string)](Methods/CreateSprite.md#createspritestring-string)          | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in the [TextureAtlas](Properties/TextureAtlas.md) of this SpriteSheet. |
| [FromRaw(GraphicsDevice, RawSpriteSheet)](Methods/FromRaw.md)                              | Creates a new instance of the [Sprite](../Sprite/) class from the given [RawSprite](../../RawTypes/RawSprite/).                                                                |
| [GetAnimationTag(string)](Methods/GetAnimationTag.md)                                      | Gets the [AnimationTag](../AnimationTag/) element with the specified name in this SpriteSheet.                                                                                         |
| [GetAnimationTagNames()](Methods/GetAnimationTagNames.md)                                  | Returns a new List\<T\> containing the name of all [AnimationTag](../AnimationTag/) elements that have been defined in this SpriteSheet.                                               |
| [RemoveAnimationTag(string)](Methods/RemoveAnimationTag.md)                                | Removes the [AnimationTag](../AnimationTag/) element with the specified name from this SpriteSheet.                                                                                    |
| [TryGetAnimationTag(string, AnimationTag)](Methods/TryGetAnimationTag.md)                  | Gets the [AnimationTag](../AnimationTag/) element with the specified name in this SpriteSheet.                                                                                         |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
