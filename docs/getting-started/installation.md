---
id: installation
title: Installation
sidebar_label: Installation
---

This document is to walk through the process of downloading `MonoGame.Aseprite` to your MonoGame project.

## Prerequisites
* [MonoGame v3.8.1](https://docs.monogame.net/articles/getting_started/0_getting_started.html)

## Downloading
`Monogame.Aseprite` is distributed via a NuGet package.  You can download it by adding the NuGet package to your project from within your IDE (e.g. the NuGet package manage in Visual Studio).  Just search for the `MonoGame.Aseprite` package.

Alternatively, if you prefer to use a command line/terminal, you can do one of the following 

**.NET CLI**
```
dotnet add package MonoGame.Aseprite --version 4.0.0
```
**Package Manager CLI**
```
Install-Package MonoGame.Aseprite -Version 4.0.0
```

Whichever method you use, once it has finished downloading, it will automatically be added as a reference in your project.  

:::caution

If you plan to use the MGCB Editor (aka Content Pipeline Tool), there is some additional setup that needs to be performed.  The MGCB Editor references are in a separate NuGet package.  Please refer to the [MGCB Editor Setup](./mgcb-editor-setup) document on downloading these and setting them up in the MGCB Editor.

For more information on why this is a separate NuGet package, you can refer to the INSERT DOCUMENT document.

:::


## Conclusion
You've got the `MonoGame.Aseprite` package downloaded.  You can head over to the Importing an Aseprite file document for the next steps to using it in your code.  Be sure you completed the steps in the caution section above if you plan to use the MGCB Editor.