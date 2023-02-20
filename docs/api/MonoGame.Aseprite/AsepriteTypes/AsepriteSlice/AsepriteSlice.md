---

title: AsepriteSlice Class
sidebar_label: AsepriteSlice
---
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines a named slice region with keys in aseprite.

```csharp
public sealed class AsepriteSlice
```

**Inheritance:** object → AsepriteSlice

## Properties

| Name                                     | Description                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HasPivot](Properties/HasPivot)       | Gets a value that indicates if this AsepriteSlice, and its [AsepriteSliceKey](../AsepriteSliceKey/),  contain pivot values.                   |
| [IsNinePatch](Properties/IsNinePatch) | Gets a value that indicates if this AsepriteSlice, and its [AsepriteSliceKey](../AsepriteSliceKey/), elements represent a nine\-patch region. |
| [KeyCount](Properties/KeyCount)       | Gets the total number of [AsepriteSliceKey](../AsepriteSliceKey/) elements in this AsepriteSlice.                                             |
| [Keys](Properties/Keys)               | Gets a read\-only span of the [AsepriteSliceKey](../AsepriteSliceKey/) for this slice.                                                        |
| [Name](Properties/Name)               | Gets the name assigned to this AsepriteSlice.                                                                                                         |
| [UserData](Properties/UserData)       | Gets the [AsepriteUserData](../AsepriteUserData/) set for this AsepriteSlice in aseprite.                                                     |


