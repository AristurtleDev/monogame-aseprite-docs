---

title: RawAnimatedTilemapWriter.Write Method
sidebar_label: Write
---
**Declaring Type:** [RawAnimatedTilemapWriter](../)  
**Namespace:** [MonoGame.Aseprite.Content.Writers](../../)  
**Assembly:** MonoGame.Aseprite

Writes the contents of the [RawAnimatedTilemap](../../../../RawTypes/RawAnimatedTilemap/) given to the file at the path specified.

```csharp
public static void Write(string path, RawAnimatedTilemap rawAnimatedTilemap);
```

## Parameters

`path`  string

The path and name of the file to write the contents of the [RawAnimatedTilemap](../../../../RawTypes/RawAnimatedTilemap/) to.  If no  file exists at this path, one will be created.  If a file already exists, it will be overwritten.

`rawAnimatedTilemap`  [RawAnimatedTilemap](../../../../RawTypes/RawAnimatedTilemap/)

The [RawAnimatedTilemap](../../../../RawTypes/RawAnimatedTilemap/) to write.


