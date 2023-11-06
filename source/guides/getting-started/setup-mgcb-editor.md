---
uid: GettingStarted.SetupMGCBEditor
_title: Setup MGCB Editor
_description: Step-by-step instructions to setup the MGCB Editor to use MonoGame.Aseprite.
---

# Setup MGCB Editor

The purpose of this document is to provide the instructions for setting up the MGCB Editor for use with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library to import your Aseprite files for your MonoGame project.

> [!CAUTION]
> This step is optional and only required if you want to use the MGCB Editor to import your Aseprite file. Using the MGCB Editor to import only performs minimal pre-processing of the file to create the [AsepriteFile](<xref:MonoGame.Aseprite.AsepriteFile>)

## Add Reference in MGCB Editor

In order to use the MGCB Editor to import/process your Aseprite file, you'll have to give it a reference to the `MonoGame.Aseprite.Content.Pipeline.dll` assembly. This assembly was downloaded as part of the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) NuGet package, but it does not get added automatically for you. To add it, complete the following steps:

1. Open your `Content.mgcb` file in the MGCB Editor.

> [!TIP]
> When using Visual Studio, double clicking the `Content.mgcb` file in your project should open it for you using the MGCB Editor. Sometimes though, it will instead open the file as a text file. If this is happening to you, you can right-click the file, and choose `Open With` to change the default application to open it with.
> 
> Alternatively, you can open it by using the following `dotnet` command in a command-line or terminal window from within the project directory
> 
> # [dotnet Command](#tab/dotnet)
> ```
> dotnet mgcb-editor ./Content/Content.mgcb
> ```
> ---


2. Click the **Content** node located in the **Project** panel on the left
3. In the **Properties** panel below it, scroll down to the **References** field. Click this field to open the **Reference Editor** dialog window.
4. Click the **Add** button in the **Reference Editor** dialog window.
5. Find and add the `MonoGame.Aseprite.Content.Pipeline.dll` file that was downloaded from the NuGet Package

> [!TIP]
> By default, NuGet will download packages to the global packages directory. The following shows where the location of the `MonoGame.Aseprite.Content.Pipeline.dll` will with default NuGet configs depending on your operating system:
>
> # [Windows](#tab/windows)
> ```sh
> %userprofile%\.nuget\packages\monogame-aseprite\5.0.1\content\MonoGame.Aseprite.Content.Pipeline.dll
> ```
> 
> # [MacOS](#tab/mac)
> ```sh
> ~/.nuget/packages/monogame-aseprite/5.0.1/content/MonoGame.Aseprite.Content.Pipeline.dll
> ```
> # [Linux](#tab/linux)
> ```sh
> ~/.nuget/packages/monogame-aseprite/5.0.1/content/MonoGame.Aseprite.Content.Pipeline.dll
> ```
> ---

6. Click **Ok** to close the **Reference Editor** dialog window.

You should now see that `MonoGame.Aseprite.Content.Pipeline.dll` in the **References** field of the property window.  When adding an Aseprite (.ase | .aseprite) file as a content item in the MGCB Editor, it should automatically select the **Aseprite File Importer** and **Aseprite File Processor** for you as the importer and processor.

> [!CAUTION]
> The reference we just added to the MGCB Editor is stored as a relative path in the Content.mgcb file.  You can see this for yourself by opening the Content.mgcb file in a text editor and locating the references section. It wil look something like this
>
> ```
> #-------------------------------- References --------------------------------#
> 
> /reference:..\..\..\..\..\..\.nuget\packages\monogame.aseprite\5.0.1\content\pipeline\MonoGame.Aseprite.Content.Pipeline.dll
> ```
> 
> Since it is stored as a relative path, this reference can break if
> * You move the project directory somewhere else on your computer
> * You use multiple workstations for development
> * You have multiple team members working on the project from a shared git repo.
> 
> These is a limitation with the MGCB Editor, not with [MonoGame.Aseprite](<xref:MonoGame.Aseprite>), because it stores it as a relative path.  Due to this, I strongly recommend setting up a **nuget.config** file for your project.  By doing this, you can specify that the NuGet packages should be downloaded to a local directory within the project itself. Then the relative path will not break since it's local to the project.
> 
> For more information on creating a **nuget.config** file to do this, see the [nuget.config File Reference on Microsoft Learn](https://learn.microsoft.com/en-us/nuget/reference/nuget-config-file).
>
> For an example of how to do this with MonoGame.Aseprite, you can check out the example **nuget.config** file found in the example repository at [https://github.com/AristurtleDev/monogame-aseprite-examples/tree/main/source/ContentPipelineExample](https://github.com/AristurtleDev/monogame-aseprite-examples/tree/main/source/ContentPipelineExample)

## Next Steps

- [Load an Aseprite File](<xref:GettingStarted.LoadAsepriteFile>)
  - Goes over how to import your Aseprite file so you can get started using it in the game.
