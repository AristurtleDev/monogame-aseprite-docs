---

title: AnimatedTilemap.OnAnimationEnd Property
sidebar_label: OnAnimationEnd
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

Gets or Sets an Action method to invoke when the animation ends.  This will only trigger when  the animation ends in a non\-looping animation, or if a looping animation is stopped by calling the [Stop()](../methods/Stop) method manually.

```csharp
public Action<AnimatedTilemap> OnAnimationEnd { get; set; }
```

## Property Value

Action\<[AnimatedTilemap](../)\>


