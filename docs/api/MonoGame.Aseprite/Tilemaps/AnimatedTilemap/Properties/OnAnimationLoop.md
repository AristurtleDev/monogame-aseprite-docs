---
title: AnimatedTilemap.OnAnimationLoop Property
sidebar_label: OnAnimationLoop

---

**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Gets or Sets an Action method to invoke each time the animation loops.  This will trigger each time the animation loops after the last frame's [OnFrameEnd](OnFrameEnd.md) triggers.

```csharp
public Action<AnimatedTilemap> OnAnimationLoop { get; set; }
```

## Property Value

Action\<[AnimatedTilemap](../)\>

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
