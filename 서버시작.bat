@echo off
chcp 65001 >nul
title Heartitude 개발 서버
echo.
echo  ╔══════════════════════════════════════╗
echo  ║     Heartitude 로컬 서버 시작 중...  ║
echo  ╚══════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [1/2] 의존성 확인 중...
if not exist node_modules (
    echo  → node_modules 없음, npm install 실행...
    npm install
) else (
    echo  → node_modules 확인 완료
)

echo.
echo [2/2] 개발 서버 시작...
echo  → http://localhost:5173 에서 실행됩니다
echo.
npm run dev
pause
