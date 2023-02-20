---

title: AsepriteLayerFlags Enum
sidebar_label: AsepriteLayerFlags
---
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines the flag values for a [AsepriteLayer](../AsepriteLayer/).

```csharp
public enum AsepriteLayerFlags : ushort
{
    None = 0,
    Visible = 1,
    Editable = 2,
    LockMovement = 4,
    Background = 8,
    PreferLinkedCels = 16,
    DisplayedCollapsed = 32,
    ReferenceLayer = 64
}
```

**Inheritance:** object → ValueType → Enum → AsepriteLayerFlags

## Fields

| Name               | Description                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Background         | Defines that the [AsepriteLayer](../AsepriteLayer/) was set as the background layer.                           |
| DisplayedCollapsed | Defines that the [AsepriteLayer](../AsepriteLayer/) should be displayed collapsed in the Aseprite application. |
| Editable           | Defines that the [AsepriteLayer](../AsepriteLayer/) is editable in the Aseprite application.                   |
| LockMovement       | Defines that the [AsepriteLayer](../AsepriteLayer/) movement is locked in the Aseprite application.            |
| None               | Defines that no flags are set                                                                                          |
| PreferLinkedCels   | Defines that the lay[AsepriteLayer](../AsepriteLayer/)er prefers linked cels.                                  |
| ReferenceLayer     | Defines that the [AsepriteLayer](../AsepriteLayer/) is a reference layer.                                      |
| Visible            | Defines that the [AsepriteLayer](../AsepriteLayer/) is visible.                                                |


