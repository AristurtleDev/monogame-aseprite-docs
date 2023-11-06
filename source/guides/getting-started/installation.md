---
uid: GettingStarted.Installation
_title: Installation
_description: Step-by-step instructions for setting up MonoGame.Aseprite for your MonoGame project.
---

# Installation

The purpose of this document is to provide the instructions for installing the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library for your MonoGame game project.

## Prerequisites

- [A MonoGame v3.8.1 project](https://docs.monogame.net/articles/getting_started/0_getting_started.html)

## Downloading

[MonoGame.Aseprite](<xref:MonoGame.Aseprite>) is distributed via a NuGet package. You can download it by adding the NuGet package to your project from within your IDE (e.g. the NuGet Package Manager in Visual Studio). Just search for the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) package.

You can also add it using the one of the following methods:

# [.NET CLI](#tab/net-cli)

```sh
dotnet add package MonoGame.Aseprite --version {{VERSION}}
```

# [Package Manager](#tab/package-manager)

```ps1
Install-Package MonoGame.Aseprite -Version {{VERSION}}
```
# [Package Reference](#tab/package-reference)

```xml
<PackageReference Include="MonoGame.Aseprite" Version="{{VERSION}}" />
```

--- 


After adding the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) NuGet package to your project, the `MonoGame.Aseprite.dll` will automatically be added as a reference to your project and is included as an output on build.

## Next Steps

- (Optional) [MGCB Editor Setup](<xref:GettingStarted.SetupMGCBEditor>)
  - This step is optional. Go here first if you plan to use the MGCB Editor to import your Aseprite file.
- [Load an Aseprite File](<xref:GettingStarted.LoadAsepriteFile>)
  - Goes over how to import your Aseprite file so you can get started using it in the game.

