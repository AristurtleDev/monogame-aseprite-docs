---

title: RawSpriteSheet Class
sidebar_label: RawSpriteSheet
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of a spritesheet.

```csharp
public sealed class RawSpriteSheet : IEquatable<RawSpriteSheet>
```

**Inheritance:** object → RawSpriteSheet

**Implements:** IEquatable\<RawSpriteSheet\>

## Properties

| Name                                               | Description                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Name](Properties/Name)                         | Gets the name assigned to the spritesheet.                                                               |
| [RawAnimationTags](Properties/RawAnimationTags) | Gets a read\-only span of the raw animation tags that represent the animations tags for the spritesheet. |
| [RawTextureAtlas](Properties/RawTextureAtlas)   | Gets raw texture atlas that represents the source texture atlas for the spritesheet.                     |

## Methods

| Name                                        | Description                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Equals(RawSpriteSheet)](Methods/Equals) | Returns a value that indicates if the given RawSpriteSheet is equal to thisRawSpriteSheet. |


