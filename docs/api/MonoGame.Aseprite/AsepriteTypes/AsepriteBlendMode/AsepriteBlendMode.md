---

title: AsepriteBlendMode Enum
sidebar_label: AsepriteBlendMode
---
**Namespace:** [MonoGame.Aseprite.AsepriteTypes](../)  
**Assembly:** MonoGame.Aseprite

Defines te blend mode values used by aseprite to determine the mode to use when blending two color values.

```csharp
public enum AsepriteBlendMode
{
    Normal = 0,
    Multiply = 1,
    Screen = 2,
    Overlay = 3,
    Darken = 4,
    Lighten = 5,
    ColorDodge = 6,
    ColorBurn = 7,
    HardLight = 8,
    SoftLight = 9,
    Difference = 10,
    Exclusion = 11,
    Hue = 12,
    Saturation = 13,
    Color = 14,
    Luminosity = 15,
    Addition = 16,
    Subtract = 17,
    Divide = 18
}
```

**Inheritance:** object → ValueType → Enum → AsepriteBlendMode

## Fields

| Name       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Addition   | Addition blend mode adds the RGB component values of each pixel from the top layer with the RGB component  values of each corresponding pixel in the bottom layer.                                                                                                                                                                                |
| Color      | The color blend mode preserves the luma of each pixel in the bottom layer and adopts the hue and chorma of corresponding pixel in the top layer.                                                                                                                                                                                                  |
| ColorBurn  | Color Burn blend divides each inverted pixel from the bottom layer with the corresponding pixel from the top layer, then inverts the resulting value.                                                                                                                                                                                             |
| ColorDodge | Color Dodge blend divides each pixel from the bottom layer with the corresponding inverted pixel from the top layer.                                                                                                                                                                                                                              |
| Darken     | Darken blend retains the smallest of each RGB component for each corresponding pixel from the top and bottom layer.                                                                                                                                                                                                                               |
| Difference | Difference blend returns the absolute value in the difference between RGB component value of each pixel in  the top layer from the RGB component value in the corresponding pixel in the bottom layer.                                                                                                                                            |
| Divide     | Divide blend mode divides the RGB component values of each pixel from the bottom layer by the RGB component values of each corresponding pixel from the top layer.                                                                                                                                                                                |
| Exclusion  | Exclusion blend mode takes the sum of the RGB component values of each pixel in the top layer with the RGB component value of each corresponding pixel in the bottom layer, then subtracts the doubled product of top  and bottom layer.                                                                                                          |
| HardLight  | Hard Light blend combines the Multiply and Screen blend modes based on the tonal value of the top layer.  If the top layer is darker than 50% gray, then the tonal values are multiplied; otherwise, they get  screened.  In both cases the resulting value is doubled after.                                                                     |
| Hue        | Hue blend mode preserves the luma and chroma of each pixel in the bottom layer and adopts the hue of the corresponding pixel in the top layer.                                                                                                                                                                                                    |
| Lighten    | Lighten blend retains the largest of each RGB component for each corresponding pixel from the top and bottom layer.                                                                                                                                                                                                                               |
| Luminosity | Luminosity blend mode preserves the hue and chroma of each pixel in the bottom layer and adopts the luma of the corresponding pixel in then top layer.                                                                                                                                                                                            |
| Multiply   | Multiply blend mode that takes the RGB component values of each pixel from the top layer and multiplies them with the RGB component values of the corresponding pixel from the bottom layer.                                                                                                                                                      |
| Normal     | Normal blend mode is the standard blend mode that takes the top layer alone without mixing any color from the layer beneath it.                                                                                                                                                                                                                   |
| Overlay    | Overlay blend combines the Multiply and Screen blend modes based on the tonal value of the bottom layer. If  the bottom layer is darker than 50% gray, then the tonal values are multiplied; otherwise, they get  screened.  In both cases the resulting value is doubled after.                                                                  |
| Saturation | Saturation blend mode preserves the luma and hue of each pixel in the bottom layer and adopts the chroma of the corresponding pixel in the top layer.                                                                                                                                                                                             |
| Screen     | Screen blend mode takes the RGB component values of each pixel from the top and bottom layer and inverts  them, then multiples the RGB component values of each pixel from the top layer with the RGB component values of the corresponding pixel from the bottom layer, then the RGB component value of each resulting pixel is  inverted again. |
| SoftLight  | Soft Light blend modulates the tonal values of the bottom layer by the tonal values of the top layer.                                                                                                                                                                                                                                             |
| Subtract   | Subtract blend mode subtracts the RGB component values of each pixel from the top layer from the RGB  component values of each corresponding pixel in the bottom layer.                                                                                                                                                                           |


