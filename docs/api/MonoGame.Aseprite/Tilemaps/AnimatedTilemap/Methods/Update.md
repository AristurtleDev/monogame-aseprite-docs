---

title: AnimatedTilemap.Update Method
sidebar_label: Update
---
**Declaring Type:** [AnimatedTilemap](../)  
**Namespace:** [MonoGame.Aseprite.Tilemaps](../../)  
**Assembly:** MonoGame.Aseprite

## Overloads

| Signature                           | Description                                  |
| ----------------------------------- | -------------------------------------------- |
| [Update(GameTime)](#updategametime) | Updates this [AnimatedTilemap](../). |
| [Update(float)](#updatefloat)       | Updates this [AnimatedTilemap](../). |

## Update(GameTime)

Updates this [AnimatedTilemap](../).

```csharp
public void Update(GameTime gameTime);
```

### Parameters

`gameTime`  GameTime

A snapshot of the game timing values for the current update cycle.

### Remarks

This should only be called once per game update cycle.

## Update(float)

Updates this [AnimatedTilemap](../).

```csharp
public void Update(float deltaTimeInMilliseconds);
```

### Parameters

`deltaTimeInMilliseconds`  float

The amount of time, in milliseconds, that have elapsed since the last update cycle in the game.

### Remarks

This should only be called once per game update cycle.


