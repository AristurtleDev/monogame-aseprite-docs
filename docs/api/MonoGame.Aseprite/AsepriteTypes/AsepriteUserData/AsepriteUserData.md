---

title: AsepriteUserData Class
sidebar_label: AsepriteUserData
---
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Represents the custom userdata that can be set for a [AsepriteFile](../../AsepriteFile/), [AsepriteCel](../AsepriteCel/), [AsepriteLayer](../AsepriteLayer/), [AsepriteSlice](../AsepriteSlice/), or [AsepriteTag](../AsepriteTag/) element in aseprite.

```csharp
public sealed class AsepriteUserData
```

**Inheritance:** object → AsepriteUserData

## Properties

| Name                               | Description                                                                                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Color](Properties/Color)       | Gets the custom color that was set for this AsepriteUserData, if any was set in aseprite;  otherwise, .                                                   |
| [HasColor](Properties/HasColor) | Gets a value that indicates whether this AsepriteUserData contains a color value.  When , guarantees that the [Color](Properties/Color) value is not . |
| [HasText](Properties/HasText)   | Gets a value that indicates if this AsepriteUserData contains a text value.  When this is , guarantees that the [Text](Properties/Text) value is not . |
| [Text](Properties/Text)         | Gets the custom text that was set for this AsepriteUserData, if any was set in aseprite;  otherwise, .                                                    |


