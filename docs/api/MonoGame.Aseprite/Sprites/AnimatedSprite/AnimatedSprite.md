---
title: AnimatedSprite Class
sidebar_label: AnimatedSprite

---

**Namespace:** [MonoGame.Aseprite.Sprites](../)  
**Assembly:** MonoGame.Aseprite

Defines an animated sprite with methods to control the playing of the sprite animation.

```csharp
public sealed class AnimatedSprite : Sprite
```

**Inheritance:** object → [Sprite](../Sprite/) → AnimatedSprite

## Properties

| Name                                                                 | Description                                                                                                              |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [CurrentFrame](Properties/CurrentFrame.md)                           | Gets the source [AnimationFrame](../AnimationFrame/) of the current frame of animation for this AnimatedSprite.  |
| [CurrentFrameTimeRemaining](Properties/CurrentFrameTimeRemaining.md) | Gets the amount of time remaining for the [CurrentFrame](Properties/CurrentFrame.md) before moving to the next frame.    |
| [IsAnimating](Properties/IsAnimating.md)                             | Gets a value that indicates if this AnimatedSprite has completed its animation.                                          |
| [IsPaused](Properties/IsPaused.md)                                   | Gets a value that indicates if this AnimatedSprite is currently paused.                                                  |
| [IsPingPong](Properties/IsPingPong.md)                               | Gets or Sets a value that indicates if this AnimatedSprite should ping\-pong once reaching the last frame of animation.  |
| [IsReversed](Properties/IsReversed.md)                               | Gets or Sets a value that indicates if this AnimatedSprite plays it's frames in reverse order.                           |
| [LoopCount](Properties/LoopCount.md)                                 | Gets a value that indicates the total number of loops\/cycles of the animation that should play for this AnimatedSprite. |
| [OnAnimationBegin](Properties/OnAnimationBegin.md)                   | Gets or Sets an Action method to invoke at the start of the animation.                                                   |
| [OnAnimationEnd](Properties/OnAnimationEnd.md)                       | Gets or Sets an Action method to invoke when the animation ends.                                                         |
| [OnAnimationLoop](Properties/OnAnimationLoop.md)                     | Gets or Sets an Action to invoke each time the animation loops.                                                          |
| [OnFrameBegin](Properties/OnFrameBegin.md)                           | Gets or Sets an Action method to invoke at the start of each frame of animation.                                         |
| [OnFrameEnd](Properties/OnFrameEnd.md)                               | Gets or Sets an Action method to invoke at the end of each frame of animation.                                           |
| [Speed](Properties/Speed.md)                                         | Sets the rate at which the animation is played.                                                                          |

## Methods

| Name                                                 | Description                                                                                                                                                                                                                                     |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Pause(bool)](Methods/Pause.md)                      | Paused this AnimatedSprite and prevents it from being updated until it is unpaused.                                                                                                                                                             |
| [Play(int?)](Methods/Play.md)                        | Starts the animation for this AnimatedSprite                                                                                                                                                                                                    |
| [Reset()](Methods/Reset.md)                          | Resets this AnimatedSprite back to its initial state as defined by the [AnimationTag](../AnimationTag/) used to create it.  You will need to call [Play(int?)](Methods/Play.md)after resetting to start the playback of the animation.s |
| [Stop()](Methods/Stop.md)                            | Stops this AnimatedSprite on the current frame.                                                                                                                                                                                                 |
| [Unpause(bool)](Methods/Unpause.md)                  | Unpaused this AnimatedSprite.                                                                                                                                                                                                                   |
| [Update(GameTime)](Methods/Update.md#updategametime) | Updates this AnimatedSprite.                                                                                                                                                                                                                    |
| [Update(double)](Methods/Update.md#updatedouble)     | Updates this AnimatedSprite.                                                                                                                                                                                                                    |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
