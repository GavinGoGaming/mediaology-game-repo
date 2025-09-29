@echo off
REM script created by cgpt! its a very simple script for Glacier Peroxide

setlocal enabledelayedexpansion
set "root=%cd%\games"

echo Generating filelist.txt...
(
for /r "%root%" %%F in (*) do (
    set "p=%%F"
    set "p=!p:%root%\=!"
    set "p=!p:\=/!"
    echo !p!
)
) > filelist.txt

echo Done. Created filelist.txt
pause
