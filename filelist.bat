@echo off
REM Generates filelist.txt with all files under games/
REM Run this from the folder that contains the "games" directory

setlocal enabledelayedexpansion
set "root=%cd%\games"

echo Generating filelist.txt...
(
for /r "%root%" %%F in (*) do (
    set "p=%%F"
    REM Remove the absolute root path
    set "p=!p:%root%\=!"
    REM Replace backslashes with forward slashes
    set "p=!p:\=/!"
    echo !p!
)
) > filelist.txt

echo Done. Created filelist.txt
pause
