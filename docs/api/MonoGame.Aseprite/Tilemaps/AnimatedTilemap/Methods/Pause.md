---

title: AnimatedTilemap.Pause Method
sidebar_label: Pause
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Pauses this [AnimatedTilemap](../) and prevents it from being updated until it is unpaused.

```csharp
public bool Pause(bool resetFrameDuration = false);
```

## Parameters

`resetFrameDuration`  bool

A value that indicates whether the the duration of the [CurrentFrame](../properties/CurrentFrame) should be reset.  When  this method returns , the duration will not be reset even if this is specified as.

## Returns

bool

 this [AnimatedTilemap](../) was successfully paused; otherwise, .  This method returns  this [AnimatedTilemap](../)                is not currently animating or if it is already paused.


