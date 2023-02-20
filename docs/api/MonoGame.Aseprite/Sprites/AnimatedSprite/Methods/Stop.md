---

title: AnimatedSprite.Stop Method
sidebar_label: Stop
---
**Declaring Type:** [AnimatedSprite](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

Stops this [AnimatedSprite](../) on the current frame.  

```csharp
public bool Stop();
```

## Remarks

This will trigger the [OnAnimationEnd](../properties/OnAnimationEnd) action if one was set.

## Returns

bool

 if this [AnimatedSprite](../) was successfully stopped; otherwise,.  This method returns  if this [AnimatedSprite](../)                is not currently animating.  If this method returns , this also indicates that the[OnAnimationEnd](../properties/OnAnimationEnd) was not triggered.


