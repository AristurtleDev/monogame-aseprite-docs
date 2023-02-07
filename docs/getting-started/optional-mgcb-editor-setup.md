---
id: mgcb-editor-setup
title: MGCB Editor Setup
sidebar_label: (Optional) MGCB Editor Setup
---

If you want to use the MonoGame [MGCB Editor (aka Content Pipeline Tool)](https://docs.monogame.net/articles/content/using_mgcb_editor.html) to import/process the Aseprite file for your game, you'll need to add an additional NuGet package to your project. For more information on why it is setup this way, please refer to the section at the end of this document.

## Downloading

The base `Monogame.Aseprite` NuGet package does not include the required dependencies for the MGCB Editor. To use the MGCB Editor to import the your Aseprite file, you need to add the `MonoGame.Aseprite.Content.Pipeline` NuGet package. You can download it by adding the NuGet package to your project from within your IDE (e.g. the NuGet package manage in Visual Studio). Just search for the `MonoGame.Aseprite.Content.Pipeline` package.

Alternatively, if you prefer to use a command line/terminal, you can do one of the following

**.NET CLI**

```
dotnet add package MonoGame.Aseprite.Content.Pipeline --version 4.0.0
```

**Package Manager CLI**

```
Install-Package MonoGame.Aseprite.Content.Pipeline -Version 4.0.0
```

Unlike the base `MonoGame.Aseprite` package, this does not get added as a reference to your project, and will not include any output in your project builds. Instead, the NuGet package contains the necessary reference that must be added manually by you in the MGCB Editor.

:::tip

The location that `MonoGame.Aseprite.Content.Pipeline.dll` downloads to when you install the NuGet package is depended which operating system you are using. by default it will download to the global package directory. On Windows, this is `%userprofile%\.nuget\packages` and on Mac/Linux this is `~/.nuget/packages`. In the global packages directory you can find the dll in the `/monogame-aseprite/[version]/contentFiles/net6.0/` directory.

:::

:::caution

If multiple people are involved with work on this project and you rely on something like a git repo to share files, each person will have to edit the reference in the Content.mgcb file each time a git pull is performed because the path to the dll will be different for their workstation.

This can be solved by using a `nuget.config` file to have the NuGet packages download to a local directory within the project.  Setting this up is out of scope for these documents, but you can refer to the following page for more information: https://learn.microsoft.com/en-us/nuget/reference/nuget-config-file

:::

## Adding the Reference in the MGCB Editor

First, open your `Content.mgcb` file in the MGCB Editor, either by double-clicking the file within Visual Studio, or alternatively using the following CLI command from within your project directory:

```
dotnet mgcb-editor ./Content/Content.mgcb
```

Once the MGCB Editor window is open with your Content.mgcb file loaded, perform the following to add the reference

1. Click the **Content** node at the top of the **Projects** panel on the left. This will show the properties of the Content node in the **Properties** panel below it.
2. Scroll to the bottom of the **Properties** panel and located the **References** field.
3. Click the **References** field to open the References Editor window.
4. Click the **Add** button
5. Navigate to the location the `MonoGame.Aseprite.Content.Pipeline.dll` file was downloaded to and select it to add it.

:::tip

Alternatively, you can edit the `Content.mgcb` file in a text editor directly to add the reference.  Just locate the **References** section inside the file and edit it to include the path to the dll like in the example below.  The example shows the path on a Windows PC.

```
#-------------------------------- References --------------------------------#

/reference:C:\Users\[your-user-name]\.nuget\packages\monogame.aseprite\[version]\contentFiles\net6.0\MonoGame.Aseprite.Content.Pipeline.dll

```

:::

## Conclusion
You've have the `MonoGame.Aseprite.Content.Pipeline.dll` added as a reference for the MGCB Editor.  This allows you to use the MGCB Editor as the importer and processor of your Aseprite file.  Next, head to the [Import an Aseprite File] to get started importing.
