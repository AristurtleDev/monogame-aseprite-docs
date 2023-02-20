---

title: AnimatedTilemap Class
sidebar_label: AnimatedTilemap
---
**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a AnimatedTilemap consisting of [AnimatedTilemapFrame](../AnimatedTilemapFrame/) elements

```csharp
public sealed class AnimatedTilemap : IEnumerable<AnimatedTilemapFrame>, IEnumerable
```

**Inheritance:** object → AnimatedTilemap

**Implements:** IEnumerable\<[AnimatedTilemapFrame](../AnimatedTilemapFrame/)\>,IEnumerable

## Constructors

| Name                                                               | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| [AnimatedTilemap(string, bool, bool, bool)](constructors/) | Initializes a new instance of the AnimatedTilemap class. |

## Properties

| Name                                                                 | Description                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CurrentFrame](Properties/CurrentFrame)                           | Gets the source [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element for the current animation frame.                                                                                                                             |
| [CurrentFrameTimeRemaining](Properties/CurrentFrameTimeRemaining) | Gets the amount of time remaining for the [CurrentFrame](Properties/CurrentFrame) before moving to the next frame.                                                                                                                         |
| [IsAnimating](Properties/IsAnimating)                             | Gets a value that indicates if this AnimatedTilemap is currently animating.                                                                                                                                                                   |
| [IsLooping](Properties/IsLooping)                                 | Gets a value that indicates whether the animation this AnimatedTilemap should loop.                                                                                                                                                           |
| [IsPaused](Properties/IsPaused)                                   | Gets a value that indicates if this AnimatedTilemap is currently paused.                                                                                                                                                                      |
| [IsPingPong](Properties/IsPingPong)                               | Gets a value that indicates whether the animation for this AnimatedTilemap should ping\-pong  once reaching the last frame of animation.                                                                                                      |
| [IsReversed](Properties/IsReversed)                               | Gets a value that indicates whether the animation this AnimatedTilemap should play frames  in reverse order.                                                                                                                                  |
| [Name](Properties/Name)                                           | Gets the name assigned to this AnimatedTilemap.                                                                                                                                                                                               |
| [OnAnimationBegin](Properties/OnAnimationBegin)                   | Gets or Sets an Action method to invoke at the start of the animation.  This will trigger only once when the animation starts before the first frame's [OnFrameBegin](Properties/OnFrameBegin) triggers.                                   |
| [OnAnimationEnd](Properties/OnAnimationEnd)                       | Gets or Sets an Action method to invoke when the animation ends.  This will only trigger when  the animation ends in a non\-looping animation, or if a looping animation is stopped by calling the [Stop()](Methods/Stop) method manually. |
| [OnAnimationLoop](Properties/OnAnimationLoop)                     | Gets or Sets an Action method to invoke each time the animation loops.  This will trigger each time the animation loops after the last frame's [OnFrameEnd](Properties/OnFrameEnd) triggers.                                               |
| [OnFrameBegin](Properties/OnFrameBegin)                           | Gets or Sets an Action method to invoke at the start of each animation frame.                                                                                                                                                                 |
| [OnFrameEnd](Properties/OnFrameEnd)                               | Gets or Sets an Action method to invoke at the end of each animation frame.                                                                                                                                                                   |
| [frameCount](Properties/frameCount)                               | Gets the total number of [AnimatedTilemapFrame](../AnimatedTilemapFrame/) elements in this AnimatedTilemap.                                                                                                                           |

## Indexers

| Name                            | Description                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [Item\[int\]](Indexers/Item) | Gets the [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element at the specified index in this AnimatedTilemap. |

## Methods

| Name                                                                                                             | Description                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AddFrame(AnimatedTilemapFrame)](Methods/AddFrame)                                                            | Adds the given [AnimatedTilemapFrame](../AnimatedTilemapFrame/) as the next frame of animation in this AnimatedTilemap.                                                                                                  |
| [Clear()](Methods/Clear)                                                                                      | Removes all [AnimatedTilemapFrame](../AnimatedTilemapFrame/) elements from this AnimatedTilemap.                                                                                                                         |
| [CreateFrame(TimeSpan)](Methods/CreateFrame)                                                                  | Creates and adds a new [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element as the next frame of animation in this AnimatedTilemap.                                                                                  |
| [Draw(SpriteBatch, Vector2, Color)](Methods/Draw#drawspritebatch-vector2-color)                               | Draws this AnimatedTilemap using the SpriteBatch.                                                                                                                                                                                |
| [Draw(SpriteBatch, Vector2, Color, Vector2, float)](Methods/Draw#drawspritebatch-vector2-color-vector2-float) | Draws this AnimatedTilemap using the SpriteBatch.                                                                                                                                                                                |
| [Draw(SpriteBatch, Vector2, Color, float, float)](Methods/Draw#drawspritebatch-vector2-color-float-float)     | Draws this AnimatedTilemap using the SpriteBatch.                                                                                                                                                                                |
| [FromRaw(GraphicsDevice, RawAnimatedTilemap)](Methods/FromRaw)                                                | Creates a new instance of the AnimatedTilemap class from the given [RawAnimatedTilemap](../../RawTypes/RawAnimatedTilemap/).                                                                                             |
| [GetEnumerator()](Methods/GetEnumerator)                                                                      | Returns an enumerator used to iterate through all of the [AnimatedTilemapFrame](../AnimatedTilemapFrame/) elements in this AnimatedTilemap.  The order of elements in the enumeration is from first frame to last frame. |
| [GetFrame(int)](Methods/GetFrame)                                                                             | Gets the [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element at the specified index in this AnimatedTilemap.                                                                                                        |
| [Pause(bool)](Methods/Pause)                                                                                  | Pauses this AnimatedTilemap and prevents it from being updated until it is unpaused.                                                                                                                                             |
| [RemoveFrame(int)](Methods/RemoveFrame)                                                                       | Removes the [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element at the specified index from this AnimatedTilemap.                                                                                                   |
| [Reset(bool)](Methods/Reset)                                                                                  | Resets this AnimatedTilemap back to its first frame of animation.                                                                                                                                                                |
| [Stop()](Methods/Stop)                                                                                        | Stops this AnimatedTilemap on the [CurrentFrame](Properties/CurrentFrame).  This will trigger the [OnAnimationEnd](Properties/OnAnimationEnd) if one was set.                                                              |
| [TryGetFrame(int, AnimatedTilemapFrame)](Methods/TryGetFrame)                                                 | Gets the [AnimatedTilemapFrame](../AnimatedTilemapFrame/) element at the specified index in this AnimatedTilemap.                                                                                                        |
| [Unpause(bool)](Methods/Unpause)                                                                              | Unpauses this AnimatedTilemap.                                                                                                                                                                                                   |
| [Update(GameTime)](Methods/Update#updategametime)                                                             | Updates this AnimatedTilemap.                                                                                                                                                                                                    |
| [Update(float)](Methods/Update#updatefloat)                                                                   | Updates this AnimatedTilemap.                                                                                                                                                                                                    |


