---
id: installation
title: Installation
sidebar_label: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The purpose of this document is to provide the instructions for installing the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library for your Monogame game project.

## Prerequisites

- [A MonoGame v3.8.1 project](https://docs.monogame.net/articles/getting_started/0_getting_started.html)

## Downloading

[MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) is distributed via a NuGet package. You can download it by adding the NuGet package to your project from within your IDE (e.g. the NuGet Package Manager in Visual Studio). Just search for the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) package.

You can also add it using the one of the following methods:

<Tabs>
 <TabItem value="net-cli" label="NET CLI">

```
dotnet add package MonoGame.Aseprite --version 4.0.2
```

</TabItem>
<TabItem value="package-manager" label="Package Manger">

```
Install-Package MonoGame.Aseprite -Version 4.0.2
```

</TabItem>

<TabItem value="package-reference" label="Package Reference">

```
<PackageReference Include="MonoGame.Aseprite" Version="4.0.2" />
```

</TabItem>
</Tabs>

After adding the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) NuGet package to your project, the `MonoGame.Aseprite.dll` will automatically be added as a reference to your project and is included as an output on build.

## Next Steps

- (Optional) [MGCB Editor Setup](./setup-mgcb-editor)
  - This step is optional. Go here first if you plan to use the MGCB Editor to import your Aseprite file.
- [Load an Aseprite File](./load-aseprite-file)
  - Goes over how to import your Aseprite file so you can get started using it in the game.

