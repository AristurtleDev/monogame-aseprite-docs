---

title: RawSpriteSheetWriter.Write Method
sidebar_label: Write
---
**Declaring Type:** [RawSpriteSheetWriter](../)  
**Namespace:** [MonoGame.Aseprite.Content.Writers](../../)  
**Assembly:** MonoGame.Aseprite

Writes the contents of the [RawSpriteSheet](../../../../RawTypes/RawSpriteSheet/) given to the file at the path specified.

```csharp
public static void Write(string path, RawSpriteSheet rawSpriteSheet);
```

## Parameters

`path`  string

The path and name of the file to write the contents of the [RawSpriteSheet](../../../../RawTypes/RawSpriteSheet/) to.  If no file  exists at this path, one will be created.  If a file already exists, it will be overwritten.

`rawSpriteSheet`  [RawSpriteSheet](../../../../RawTypes/RawSpriteSheet/)

The [RawSpriteSheet](../../../../RawTypes/RawSpriteSheet/) to write.


