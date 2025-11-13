---
id: autohotkey
title: AutoHotkey
description: The ultimate automation scripting language for Windows.
---

- https://www.autohotkey.com/

## YouTube Videos

## Como instalar, configurar e utilizar o AutoHotKey v2

- https://www.autohotkey.com/
- https://notepad-plus-plus.org/
- https://github.com/jNizM/ahk_notepad-plus-plus
- https://www.autohotkey.com/docs/v2/index.htm

<iframe width="560" height="315" src="https://www.youtube.com/embed/KyBrhMY4A8s?si=vwvuceL6wK9hy26m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Como instalar, configurar e utilizar o AutoHotKey

Windows Registry Editor: HKEY_CLASSES_ROOT\AutoHotkeyScript\Shell\Edit\Command

- https://www.autohotkey.com/
- https://www.autohotkey.com/docs/AutoHotkey.htm
- https://notepad-plus-plus.org/
- https://github.com/jNizM/ahk_notepad-plus-plus
- https://www.rosettacode.org/wiki/Category:AutoHotkey

- https://code.visualstudio.com/
- https://github.com/ahkscript/SublimeAutoHotkey

<iframe width="560" height="315" src="https://www.youtube.com/embed/P7hD-95ttzQ?si=PtXFP8OjhFsQAgEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Code example

```autohotkey
^j::
MsgBox, Wow!
MsgBox, There are
Run, notepad.exe
WinActivate, Untitled - Notepad
WinWaitActive, Untitled - Notepad
Send, 7 lines{!}{Enter}
SendInput, inside the CTRL{+}J hotkey.
return
```
