---

title: AnimatedTilemap.OnAnimationBegin Property
sidebar_label: OnAnimationBegin
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Gets or Sets an Action method to invoke at the start of the animation.  This will trigger only once when the animation starts before the first frame's [OnFrameBegin](OnFrameBegin) triggers.

```csharp
public Action<AnimatedTilemap> OnAnimationBegin { get; set; }
```

## Property Value

Action\<[AnimatedTilemap](../)\>


