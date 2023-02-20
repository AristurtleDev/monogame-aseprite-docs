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

| Name                                                                 | Description                                                                                                             |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [AnimationTag](Properties/AnimationTag)                           | Gets the source [AnimationTag](Properties/AnimationTag) that defines the animation.                                  |
| [CurrentFrame](Properties/CurrentFrame)                           | Gets the source [AnimationFrame](../AnimationFrame/) of the current frame of animation for this AnimatedSprite. |
| [CurrentFrameTimeRemaining](Properties/CurrentFrameTimeRemaining) | Gets the amount of time remaining for the [CurrentFrame](Properties/CurrentFrame) before moving to the next frame.   |
| [IsAnimating](Properties/IsAnimating)                             | Gets a value that indicates if this AnimatedSprite has completed its animation.                                         |
| [IsPaused](Properties/IsPaused)                                   | Gets a value that indicates if this AnimatedSprite is currently paused.                                                 |
| [OnAnimationBegin](Properties/OnAnimationBegin)                   | Gets or Sets an Action method to invoke at the start of the animation.                                                  |
| [OnAnimationEnd](Properties/OnAnimationEnd)                       | Gets or Sets an Action method to invoke when the animation ends.                                                        |
| [OnAnimationLoop](Properties/OnAnimationLoop)                     | Gets or Sets an Action to invoke each time the animation loops.                                                         |
| [OnFrameBegin](Properties/OnFrameBegin)                           | Gets or Sets an Action method to invoke at the start of each frame of animation.                                        |
| [OnFrameEnd](Properties/OnFrameEnd)                               | Gets or Sets an Action method to invoke at the end of each frame of animation.                                          |

## Methods

| Name                                                 | Description                                                                         |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Pause(bool)](Methods/Pause)                      | Paused this AnimatedSprite and prevents it from being updated until it is unpaused. |
| [Reset(bool)](Methods/Reset)                      | Resets this AnimatedSprite back to its first frame of animation.                    |
| [Stop()](Methods/Stop)                            | Stops this AnimatedSprite on the current frame.                                     |
| [Unpause(bool)](Methods/Unpause)                  | Unpaused this AnimatedSprite.                                                       |
| [Update(GameTime)](Methods/Update#updategametime) | Updates this AnimatedSprite.                                                        |
| [Update(float)](Methods/Update#updatefloat)       | Updates this AnimatedSprite.                                                        |


