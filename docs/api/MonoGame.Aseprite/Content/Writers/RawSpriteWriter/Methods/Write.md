---

title: RawSpriteWriter.Write Method
sidebar_label: Write
---
**Declaring Type:** [RawSpriteWriter](../)  
**Namespace:** [MonoGame.Aseprite.Content.Writers](../../)  
**Assembly:** MonoGame.Aseprite

Writes the contents of the [RawSprite](../../../../RawTypes/RawSprite/) given to the file at the path specified.

```csharp
public static void Write(string path, RawSprite rawSprite);
```

## Parameters

`path`  string

The path and name of the file to write the contents of the [RawSprite](../../../../RawTypes/RawSprite/) to.  If no file exists at this path, one will be created.  If a file already exists, it will be overwritten.

`rawSprite`  [RawSprite](../../../../RawTypes/RawSprite/)

The [RawSprite](../../../../RawTypes/RawSprite/) to write.


