---
title: AnimatedSprite.Update Method
sidebar_label: Update

---

**Declaring Type:** [AnimatedSprite](../)  
**Namespace:** [MonoGame.Aseprite.Sprites](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                           | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| [Update(GameTime)](#updategametime) | Updates this [AnimatedSprite](../). |
| [Update(double)](#updatedouble)     | Updates this [AnimatedSprite](../). |

## Update(GameTime)

Updates this [AnimatedSprite](../).

```csharp
public void Update(GameTime gameTime);
```

### Parameters

`gameTime`  GameTime

A snapshot of the game timing values for the current update cycle.

### Remarks

This should only be called once per update cycle.

## Update(double)

Updates this [AnimatedSprite](../).

```csharp
public void Update(double deltaTimeInSeconds);
```

### Parameters

`deltaTimeInSeconds`  double

The amount of time, in seconds, that have elapsed since the last update cycle in the game.

### Remarks

This should only be called once per update cycle.

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
