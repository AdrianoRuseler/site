---
id: ffmpeg
title: ffmpeg
description: A complete, cross-platform solution to record, convert and stream audio and video.
---

## Convert to mp3

You can create a batch file (`convert_to_mp3.bat`) with this content:

```bash
@echo off
REM cd path\to\your\music\folder

for %%f in (*.wav *.flac *.aac *.ogg *.aif) do (
    echo Converting %%f to MP3...
    ffmpeg -i "%%f" -codec:a libmp3lame -qscale:a 2 "%%~nf.mp3"
)
echo Done!

```

You can create a batch file (`convert_to_mp3_del_ok.bat`) that
recursively converts non-MP3 audio files in all subfolders

```bash
@echo off
REM cd path\to\your\music\folder

for /R %%f in (*.wav *.flac *.aac *.ogg *.aif) do (
    echo Converting %%f to MP3...
    ffmpeg -i "%%f" -codec:a libmp3lame -qscale:a 2 "%%~dpnf.mp3"

    if exist "%%~dpnf.mp3" (
        echo Conversion successful. Deleting original file %%f...
        del "%%f"
    ) else (
        echo Conversion failed for %%f. Original file retained.
    )
)

echo All done!

```
