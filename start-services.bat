@echo off
echo Starting 100 Backend Projects...
echo.

echo Choose which services to start:
echo 1. Authentication Services (16 services)
echo 2. Basic APIs (17 services)  
echo 3. CRUD Applications (15 services)
echo 4. Advanced Services (23 services)
echo 5. DevOps Tools (10 services)
echo 6. All Services (81 services) - WARNING: Resource intensive
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    echo Starting Authentication Services...
    docker-compose -f docker-compose.auth.yml up --build
) else if "%choice%"=="2" (
    echo Starting Basic APIs...
    docker-compose -f docker-compose.basic.yml up --build
) else if "%choice%"=="3" (
    echo Starting CRUD Applications...
    docker-compose -f docker-compose.crud.yml up --build
) else if "%choice%"=="4" (
    echo Starting Advanced Services...
    docker-compose -f docker-compose.advanced.yml up --build
) else if "%choice%"=="5" (
    echo Starting DevOps Tools...
    docker-compose -f docker-compose.devops.yml up --build
) else if "%choice%"=="6" (
    echo Starting ALL Services - This may take a while and use significant resources...
    docker-compose up --build
) else (
    echo Invalid choice. Please run the script again.
)

pause