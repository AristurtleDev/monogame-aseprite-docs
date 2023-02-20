---

title: AnimatedSprite.Pause Method
sidebar_label: Pause
---
**Declaring Type:** [AnimatedSprite](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

Paused this [AnimatedSprite](../) and prevents it from being updated until it is unpaused.

```csharp
public bool Pause(bool resetFrameDuration = false);
```

## Parameters

`resetFrameDuration`  bool

A value that indicates whether the [CurrentFrameTimeRemaining](../properties/CurrentFrameTimeRemaining) should be reset.  When this method returns , this indicates the [CurrentFrameTimeRemaining](../properties/CurrentFrameTimeRemaining) was not reset even if this was specified as .

## Returns

bool

 if this [AnimatedSprite](../) was successfully paused; otherwise, .  This method returns  if this [AnimatedSprite](../)                is not currently animating or if it is already paused.


