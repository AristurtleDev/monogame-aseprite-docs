---
id: mgcb-editor
title: Note About the MGCB Editor
sidebar_label: Note About the MGCB Editor
---

In the previous versions of `MonoGame.Aseprite`, it was required to use the MGCB Editor (aka the Content Pipeline Tool) to import the aseprite file. Doing this forced the users of the library to not only use the MGCB Editor, but also forced the import to process the aseprite file strictly as a spritesheet with several limitations, such as requiring at minimum one tag to have been created in Aseprite.

This was not an ideal workflow, especially if someone wanted to import a single frame file that served as something like a background image.

Starting with version 4.0, using the MGCB Editor is no longer a requirement. `MonoGame.Aseprite` is now designed to allow importing and processing of the aseprite file both at runtime in your game, as well as providing import and processing methods that you can incorporate into a custom workflow you may have for managing assets. Importing and processing via the MGCB Editor is still provided for anyone that would like to continue doing it that way.

:::tip

Throughout the documentation here, information will be provided for importing and processing both with and without the use of the MGCB Editor.

:::
