@echo off
cd /d "%~dp0"
start "Bet Tracker Server" /min python -m http.server 8791
timeout /t 1 /nobreak >nul
start "" http://localhost:8791/index.html
