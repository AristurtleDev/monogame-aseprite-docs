---

title: AsepriteFile.Load Method
sidebar_label: Load
---
**Declaring Type:** [AsepriteFile](../)  
**Namespace:** [MonoGame.Aseprite](../../)  
**Assembly:** MonoGame.Aseprite

Loads the contents of the aseprite file at the specified path.  The result is a new instance of the [AsepriteFile](../) class containing the contents of the file read.

```csharp
public static AsepriteFile Load(string path);
```

## Parameters

`path`  string

The path and name of the aseprite file to load.

## Returns

[AsepriteFile](../)

A new instance of the [AsepriteFile](../) class create by this method.

## Exceptions

FileNotFoundException

Thrown if no file is located at the specified path.

InvalidOperationException

Thrown if an error occurs during the reading of the [AsepriteFile](../).  The exception message will  contain the cause of the exception.


