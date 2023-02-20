---

title: RawAnimationTag Class
sidebar_label: RawAnimationTag
---
**Namespace:** [MonoGame.Aseprite.RawTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a class that represents the raw values of an animation tag.

```csharp
public sealed class RawAnimationTag : IEquatable<RawAnimationTag>
```

**Inheritance:** object → RawAnimationTag

**Implements:** IEquatable\<RawAnimationTag\>

## Properties

| Name                                                   | Description                                                                                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [IsLooping](Properties/IsLooping)                   | Gets a value that indicates whether the animation defined by the animation tag should loop.                                                             |
| [IsPingPong](Properties/IsPingPong)                 | Gets a value that indicates whether the animation defined by the animation tag should ping\-pong once  reaching the last frame of animation.            |
| [IsReversed](Properties/IsReversed)                 | ets a value that indicates whether the animation defined by the animation tag should play in reverse.                                                   |
| [Name](Properties/Name)                             | Gets the name assigned to the animation tag.                                                                                                            |
| [RawAnimationFrames](Properties/RawAnimationFrames) | Gets a read\-only span of the [RawAnimationFrame](../RawAnimationFrame/) elements that represent the frames of animation for the animation tag. |

## Methods

| Name                                         | Description                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Equals(RawAnimationTag)](Methods/Equals) | Returns a value that indicates if the given RawAnimationTag is equal to thisRawAnimationTag. |


