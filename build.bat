@ECHO OFF
SET NANT_HOME="C:\Users\ajackson\Development\Bin\nant-0.91\bin"

"%NANT_HOME%\nant.exe" -buildfile:build.xml -t:net-4.0 %1
PAUSE