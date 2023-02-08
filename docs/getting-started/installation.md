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

You can also add it using the one of the below command line/terminal commands from within the project directory:

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
<PackageReference Include="MonoGame.Aseprite" Version="3.1.1" />
```

</TabItem>
</Tabs>

After adding the `Monogame.Aseprite` NuGet package to your project, you will now have two dll references that are included and will be output as part of each build

| DLL/Assembly                   | Summary                                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `MonoGame.Aseprite.dll`        | Assembly that contains the runtime classes.                                                             |
| `MonoGame.Aseprite.Common.dll` | Assembly that contains classes and helpers used to importing, processing, reading, and writing content. This is used by the `MonoGame.Aseprite.dll` assembly. |

## (Optional) MGCB Editor Setup

Starting with `MonoGame.Aseprite` version 4.0, using the MGCB Editor (aka the Content Pipeline Tool) is no longer a requirement when using this library.  However, `MonoGame.Aseprite` still supports the use of it is something the end user would like to do.  There is a small setup that needs to be done first to use it.

:::caution

If you plan to use the MGCB Editor (aka Content Pipeline Tool), there is some additional setup that needs to be performed. The MGCB Editor references are in a separate NuGet package. Please refer to the [MGCB Editor Setup](./mgcb-editor-setup) document on downloading these and setting them up in the MGCB Editor.

For more information on why this is a separate NuGet package, you can refer to the INSERT DOCUMENT document.

:::

## Conclusion

You've got the `MonoGame.Aseprite` package downloaded. You can head over to the Importing an Aseprite file document for the next steps to using it in your code. Be sure you completed the steps in the caution section above if you plan to use the MGCB Editor.
