---
id: setup-mgcb-editor
title: Setup MGCB Editor
sidebar_label: (Optional) Setup MGCB Editor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

This step is optional and only required if you want to use the MGCB Editor to import your Aseprite file.  Using the MGCB Editor to import only performs minimal pre-processing of the file to create the `AsepriteFile`

:::

## Downloading

If you want to use the MonoGame [MGCB Editor (aka Content Pipeline Tool)](https://docs.monogame.net/articles/content/using_mgcb_editor.html) to import/process the Aseprite file for your game, you'll need to add the `MonoGame.Aseprite.Content.Pipeline` NuGet package to your project.  You can add it within your IDE (e.g. the NuGet Package Manager in Visual Studio).  Just search for `MonoGame.Aseprite.Content.Pipeline`.

Alternatively, you can use the following CLI commands

<Tabs>
<TabItem value="net-cli" label="NET CLI">

```
dotnet add package MonoGame.Aseprite.Content.Pipeline --version 4.0.0
```

</TabItem>
<TabItem value="package-manager" label="Package Manger">

```
Install-Package MonoGame.Aseprite.Content.Pipeline -Version 4.0.0
```

</TabItem>
</Tabs>

Adding this NuGet package will *not** add any references or output any build items.  Instead, the NuGet package that is downloaded contains the `MonoGame.Aseprite.Content.Pipeline.dll` that needs to be added as a reference in the MGCB Editor.

## Add Reference in MGCB Editor
Next, you'll need to add the reference in the MGCB Editor.  To do this, complete the following steps

1. Open your `Content.mgcb` file in the MGCB Editor.
    * This can be opened by double clicking the `Content.mgcb` file if you are using the Visual Studio.
    * Alternatively, you can use the following CLI command from your project's root directory

    ```
    dotnet mgcb-editor ./Content/Content.mgcb
    ```
2. Click the **Content** node located in the **Project** panel on the left
3. In the **Properties** panel below it, scroll down to the **References** field.  Click this field to open the **Reference Editor** dialog window.
4. Click the **Add** button
5. Find and add the `MonoGame.Aseprite.Content.Pipeline.dll` file that was downloaded from the NuGet Package
    * By default, NuGet will download packages to the global packages directory.
        * On Windows: 
        
        ```
        %userprofile%\.nuget\packages\monogame-aseprite-content-pipeline\4.0.0\MonoGame.Aseprite.Content.Pipeline.dll
        ```
        * On Mac/Linux: 
        
        ```
        ~/.nuget/packages/monogame-aseprite-content-pipeline/4.0.0/MonoGame.Aseprite.Content.Pipeline.dll
        ```

:::tip

The reference you just added to the MGCB editor is stored as a relative path in the Content.mgcb file, relative to the Content.mgcb file. If you use multiple workstations for development, or have multiple team members working on the project from a shared git repo, I strongly recommend setting up a **nuget.config** file.  By doing this, you can specify to have the NuGet package download to a local directory within the project directory.

Otherwise, the reference in the MGCB Editor will break when doing a git pull on a different workstation and have to be updated every time.  This is not a limitation of the `Monogame.Aseprite` library and is completely out of my control. 

For more information on creating a **nuget.config** file to do this, see the [nuget.config File Reference on Microsoft Learn](https://learn.microsoft.com/en-us/nuget/reference/nuget-config-file).

:::

After performing those steps, you should be able to add an Aseprite (.aseprite | .ase) file in your Content and see the `Aseprite File Importer` and `Aseprite File Processor` listed as the importer and processor for that file.

## Next Steps

- [Import an Aseprite File](./import-aseprite-file)
  - Goes over how to import your Aseprite file so you can get started using it in the game.

