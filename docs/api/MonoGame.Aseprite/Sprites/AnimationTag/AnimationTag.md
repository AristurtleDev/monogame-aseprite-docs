---

title: AnimationTag Class
sidebar_label: AnimationTag
---
**Namespace:** [MonoGame.Aseprite.Sprites](../)  
**Assembly:** MonoGame.Aseprite

Defines the definition of an animation.

```csharp
public sealed class AnimationTag
```

**Inheritance:** object → AnimationTag

## Properties

| Name                                   | Description                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FrameCount](Properties/FrameCount) | Gets the total number of ,[AnimationFrame](../AnimationFrame/) elements.                                                                                                                |
| [Frames](Properties/Frames)         | Gets a read\-only span of the [AnimationFrame](../AnimationFrame/) elements that make up the animation.  The order of elements is from first frame to last frame in non\-reverse order. |
| [IsLooping](Properties/IsLooping)   | Gets or Sets a value that indicates whether the animation should loop.                                                                                                                          |
| [IsPingPong](Properties/IsPingPong) | Gets or Sets a value that indicates whether the animation should ping\-pong once reaching the last frame of animation.                                                                          |
| [IsReversed](Properties/IsReversed) | Gets or Sets a value that indicates whether the animation should play in reverse.                                                                                                               |
| [Name](Properties/Name)             | Gets the name of the animation                                                                                                                                                                  |

## Indexers

| Name                            | Description                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [Item\[int\]](Indexers/Item) | Gets the [AnimationFrame](../AnimationFrame/) element at the specified index from this AnimationTag. |

## Methods

| Name                                 | Description                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [GetFrame(int)](Methods/GetFrame) | Gets the [AnimationFrame](../AnimationFrame/) element at the specified index from this AnimationTag. |


