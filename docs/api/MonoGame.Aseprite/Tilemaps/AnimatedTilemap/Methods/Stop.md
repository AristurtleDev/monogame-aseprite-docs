---

title: AnimatedTilemap.Stop Method
sidebar_label: Stop
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Stops this [AnimatedTilemap](../) on the [CurrentFrame](../properties/CurrentFrame).  This will trigger the [OnAnimationEnd](../properties/OnAnimationEnd) if one was set.

```csharp
public bool Stop();
```

## Returns

bool

 this [AnimatedTilemap](../) was successfully stopped; otherwise, .  This method returns  this [AnimatedTilemap](../) is                  not currently animating.  If this method returns , this indicates that the [OnAnimationEnd](../properties/OnAnimationEnd) action method was not invoked.


