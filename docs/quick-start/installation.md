---
id: installation
title: Installation
sidebar_label: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This documents provides the instructions for installing the `MonoGame.Aseprite` library to your project.

## Prerequisites

- [A MonoGame v3.8.1 project](https://docs.monogame.net/articles/getting_started/0_getting_started.html)

## Downloading

`Monogame.Aseprite` is distributed via a NuGet package. You can download it by adding the NuGet package to your project from within your IDE (e.g. the NuGet Package Manager in Visual Studio). Just search for the `MonoGame.Aseprite` package.

You can also add it using the one of the following methods:

<Tabs>
 <TabItem value="net-cli" label="NET CLI">

```
dotnet add package MonoGame.Aseprite --version 4.0.0
```

</TabItem>
<TabItem value="package-manager" label="Package Manger">

```
Install-Package MonoGame.Aseprite -Version 4.0.0
```

</TabItem>

<TabItem value="package-reference" label="Package Reference">

```
<PackageReference Include="MonoGame.Aseprite" Version="4.0.0" />
```

</TabItem>
</Tabs>

After adding the `Monogame.Aseprite` NuGet package to your project, you will now have two dll references that are included and will be output as part of each build

| DLL/Assembly                   | Summary                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MonoGame.Aseprite.dll`        | Assembly that contains the runtime classes.                                                                                                                   |
| `MonoGame.Aseprite.Common.dll` | Assembly that contains classes and helpers used to importing, processing, reading, and writing content. This is used by the `MonoGame.Aseprite.dll` assembly. |

## Next Steps

- (Optional) [MGCB Editor Setup](./setup-mgcb-editor)
  - This step is optional. Go here first if you plan to use the MGCB Editor to import your Aseprite file.
- [Import an Aseprite File](./import-aseprite-file)
  - Goes over how to import your Aseprite file so you can get started using it in the game.

