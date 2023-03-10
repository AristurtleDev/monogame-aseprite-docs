---
title: AnimatedSprite.Unpause Method
sidebar_label: Unpause

---

**Declaring Type:** [AnimatedSprite](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

Unpaused this [AnimatedSprite](../).

```csharp
public bool Unpause(bool advanceToNextFrame = false);
```

## Parameters

`advanceToNextFrame`  bool

A value that indicates whether this [AnimatedSprite](../) should immediately advance to the next  frame after unpausing.  When this method returns , this [AnimatedSprite](../)will \-not\- be advanced to the next frame, even if this was specified as .

## Returns

bool

 if this [AnimatedSprite](../) was successfully unpaused; otherwise, .  This method returns  if this [AnimatedSprite](../)                is not currently animating or if it is not paused.

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
