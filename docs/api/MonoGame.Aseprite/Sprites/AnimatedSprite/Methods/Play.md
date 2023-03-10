---
title: AnimatedSprite.Play Method
sidebar_label: Play

---

**Declaring Type:** [AnimatedSprite](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

Starts the animation for this [AnimatedSprite](../)

```csharp
public bool Play(int? loopCount = null);
```

## Parameters

`loopCount`  Nullable\<int\>

When a value is provided, specifies the total number of loop\/cycles to perform before stopping the animation. 

When  is provided, loop count will default to the value defined in the [AnimationTag](../../AnimationTag/) used to create this [AnimatedSprite](../)

`0` \= infinite looping

If [IsPingPong](../../AnimationTag/Properties/IsPingPong.md) is equal to , each direction of the ping\-pong will count as a loop.  

## Returns

bool

 if animation play was successfully started for this [AnimatedSprite](../);                 otherwise, .  This method returns  if the animation is already                 playing (when [IsAnimating](../Properties/IsAnimating.md) equals ).

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
