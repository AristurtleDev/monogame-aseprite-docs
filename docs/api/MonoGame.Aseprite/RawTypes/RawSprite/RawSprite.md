---

title: RawSprite Class
sidebar_label: RawSprite
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of a sprite.

```csharp
public sealed class RawSprite : IEquatable<RawSprite>
```

**Inheritance:** object → RawSprite

**Implements:** IEquatable\<RawSprite\>

## Properties

| Name                                   | Description                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Name](Properties/Name)             | Gets the name assigned to the sprite.                                                                    |
| [RawTexture](Properties/RawTexture) | Gets the raw texture that represents the source texture for the sprite.                                  |
| [Slices](Properties/Slices)         | Gets a read\-only span of the raw slice values the texture region that will be generated for the sprite. |

## Methods

| Name                                   | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| [Equals(RawSprite)](Methods/Equals) | Returns a value that indicates if the given RawSprite is equal to thisRawSprite. |


