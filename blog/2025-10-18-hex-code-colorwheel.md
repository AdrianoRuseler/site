---
slug: /colorwheel
title: Background color hex codes for each key letter
authors: adrianoruseler
---

To generate a markdown table with the key letter and background color hex code from the provided image, I'll need to **visually inspect and estimate** the colors for each section. Since I can't interact with the image as a color picker, the hex codes will be **approximate** representations of the colors I see.

<!-- truncate -->

Here is the markdown table with the approximate background color hex codes for each key letter:

## Color Wheel Hex Codes

| Key Letter | Approximate Background Color Hex Code |
| :--------: | :-----------------------------------: |
|   **1A**   |      `#25D5E0` (Light Cyan/Teal)      |
|   **1B**   |         `#15C6D1` (Cyan/Teal)         |
|   **2A**   |       `#4ED94E` (Bright Green)        |
|   **2B**   |           `#38CB3A` (Green)           |
|   **3A**   |        `#6DCF38` (Lime Green)         |
|   **3B**   |       `#55C31D` (Strong Green)        |
|   **4A**   |       `#E0DD39` (Yellow-Green)        |
|   **4B**   |    `#D8D321` (Vivid Yellow-Green)     |
|   **5A**   |    `#E2A941` (Deep Yellow/Orange)     |
|   **5B**   |       `#DB9C2A` (Burnt Orange)        |
|   **6A**   |    `#E17565` (Light Coral/Salmon)     |
|   **6B**   |       `#DE6055` (Coral/Salmon)        |
|   **7A**   |     `#DD5590` (Fuschia/Deep Pink)     |
|   **7B**   |        `#D63F7F` (Vivid Pink)         |
|   **8A**   |   `#C857BE` (Lavender/Light Violet)   |
|   **8B**   |   `#BD44B2` (Deep Lavender/Violet)    |
|   **9A**   |    `#9E67D1` (Light Indigo/Purple)    |
|   **9B**   |       `#8E52C6` (Indigo/Purple)       |
|  **10A**   |        `#6692E1` (Light Blue)         |
|  **10B**   |        `#5081D9` (Medium Blue)        |
|  **11A**   |         `#4DBAE3` (Sky Blue)          |
|  **11B**   |         `#34ACC7` (Cyan Blue)         |
|  **12A**   |        `#38D4E5` (Bright Cyan)        |
|  **12B**   |        `#20C9D1` (Strong Cyan)        |

---

**Note:** The exact hex codes would require a digital color analysis tool, but the codes provided above represent the apparent colors of the wedges in the image.

Here is a MATLAB function that takes a key letter (like '1A', '5B', etc.) as input and returns the approximate color hex code based on the colors observed in the image.

```matlab
function hexCode = getColorHex(keyLetter)
% GETCOLORHEX Returns the approximate color hex code for a key letter from a color wheel.
%
%   HEXCODE = GETCOLORHEX(KEYLETTER) takes a string KEYLETTER
%   (e.g., '1A', '5B') and returns the corresponding approximate
%   background color hex code as a string.
%
%   Input:
%       keyLetter - A string representing the key letter (e.g., '1A', '12B').
%
%   Output:
%       hexCode   - A string containing the 6-digit hex color code (e.g., '#25D5E0').
%                   Returns '#FFFFFF' (White) if the key letter is not found.

    % Define the color map using a switch statement
    switch upper(keyLetter)
        % Ring A (Inner Ring - generally lighter/softer tones)
        case '1A'
            hexCode = '#25D5E0'; % Light Cyan/Teal
        case '2A'
            hexCode = '#4ED94E'; % Bright Green
        case '3A'
            hexCode = '#6DCF38'; % Lime Green
        case '4A'
            hexCode = '#E0DD39'; % Yellow-Green
        case '5A'
            hexCode = '#E2A941'; % Deep Yellow/Orange
        case '6A'
            hexCode = '#E17565'; % Light Coral/Salmon
        case '7A'
            hexCode = '#DD5590'; % Fuschia/Deep Pink
        case '8A'
            hexCode = '#C857BE'; % Lavender/Light Violet
        case '9A'
            hexCode = '#9E67D1'; % Light Indigo/Purple
        case '10A'
            hexCode = '#6692E1'; % Light Blue
        case '11A'
            hexCode = '#4DBAE3'; % Sky Blue
        case '12A'
            hexCode = '#38D4E5'; % Bright Cyan

        % Ring B (Outer Ring - generally stronger/deeper tones)
        case '1B'
            hexCode = '#15C6D1'; % Cyan/Teal
        case '2B'
            hexCode = '#38CB3A'; % Green
        case '3B'
            hexCode = '#55C31D'; % Strong Green
        case '4B'
            hexCode = '#D8D321'; % Vivid Yellow-Green
        case '5B'
            hexCode = '#DB9C2A'; % Burnt Orange
        case '6B'
            hexCode = '#DE6055'; % Coral/Salmon
        case '7B'
            hexCode = '#D63F7F'; % Vivid Pink
        case '8B'
            hexCode = '#BD44B2'; % Deep Lavender/Violet
        case '9B'
            hexCode = '#8E52C6'; % Indigo/Purple
        case '10B'
            hexCode = '#5081D9'; % Medium Blue
        case '11B'
            hexCode = '#34ACC7'; % Cyan Blue
        case '12B'
            hexCode = '#20C9D1'; % Strong Cyan

        % Default case for invalid input
        otherwise
            warning('getColorHex:InvalidKey', 'Key letter "%s" not found in the color map. Returning White.', keyLetter);
            hexCode = '#FFFFFF';
    end
end
```

### How to Use the Function

1.  **Save:** Save the code above in a file named `getColorHex.m` in a directory accessible to MATLAB.

2.  **Run:** Call the function from the MATLAB Command Window:

    ```matlab
    % Example 1: Get the hex code for 5B
    color = getColorHex('5B')
    % color will be: '#DB9C2A'

    % Example 2: Input is not case-sensitive (due to upper(keyLetter))
    color2 = getColorHex('3a')
    % color2 will be: '#6DCF38'

    % Example 3: Invalid input
    color3 = getColorHex('XX')
    % color3 will be: '#FFFFFF' (and a warning will be displayed)
    ```

```bash
Key Letter Approximate Background Color Hex Code
1A #25D5E0 (Light Cyan/Teal)
1B #15C6D1 (Cyan/Teal)
2A #4ED94E (Bright Green)
2B #38CB3A (Green)
3A #6DCF38 (Lime Green)
3B #55C31D (Strong Green)
4A #E0DD39 (Yellow-Green)
4B #D8D321 (Vivid Yellow-Green)
5A #E2A941 (Deep Yellow/Orange)
5B #DB9C2A (Burnt Orange)
6A #E17565 (Light Coral/Salmon)
6B #DE6055 (Coral/Salmon)
7A #DD5590 (Fuschia/Deep Pink)
7B #D63F7F (Vivid Pink)
8A #C857BE (Lavender/Light Violet)
8B #BD44B2 (Deep Lavender/Violet)
9A #9E67D1 (Light Indigo/Purple)
9B #8E52C6 (Indigo/Purple)
10A #6692E1 (Light Blue)
10B #5081D9 (Medium Blue)
11A #4DBAE3 (Sky Blue)
11B #34ACC7 (Cyan Blue)
12A #38D4E5 (Bright Cyan)
12B #20C9D1 (Strong Cyan)
```
