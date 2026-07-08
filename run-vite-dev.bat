@echo off
cd /d "%~dp0"
set "SystemRoot=C:\WINDOWS"
set "windir=C:\WINDOWS"
set "PATH=C:\Program Files\nodejs;C:\WINDOWS\System32;C:\WINDOWS;C:\WINDOWS\System32\WindowsPowerShell\v1.0"
"C:\Program Files\nodejs\node.exe" node_modules\vite\bin\vite.js --host 127.0.0.1 > vite-dev.out.log 2> vite-dev.err.log
