---
id: using-the-mgcb-editor
title: Using the MGCB Editor
sidebar_label: Using the MGCB Editor
---

This document provided information on using the MGCB Editor to import and process the contents of your aseprite file.

:::info

Note that unlike previous versions of `MonoGame.Aseprite`, the MGCB Editor is no longer a requirement and importing and/or processing can be done through code if preferred. Please see the [Note About the MGCB Editor] document for an explanation.

:::

## Prerequisites
Before using the MGCB Editor, ensure you have performed the [MGCB Editor Setup] outlined in the document linked.

You should also have a basic understanding of how to use the MGCB Editor.  More information can be found at [https://docs.monogame.net/articles/content/using_mgcb_editor.html](https://docs.monogame.net/articles/content/using_mgcb_editor.html)

## Importing
A single importer is provided in the MGCB Editor for importing the aseprite file contents.  This is the **Aseprite File Importer - MonoGame.Aseprite** importer.  Whenever you add a file ending with the `.ase` or `.aseprite` extension, it should automatically be selected for you as the default importer.

![A screenshot of the MGCB-Editor showing the Aseprite File Importer selected for a content item](/img/docs/guides/using-the-mgcb-editor/aseprite-file-importer.png)
