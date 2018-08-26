@echo off

echo. 
echo [+] installing bower
npm install -g bower
echo. 
echo [+] installing nodemon
npm install -g nodemon
echo.  
echo [+] installing angular cli
npm install -g @angular/cli
  
echo [+] installing tns
npm install -g tns

echo [+] installing node prerequisites.
cmd.exe /C "cd  %~dp0%node && npm install"
echo. 
echo [+] installing nativescript prerequisites.
cmd.exe /C "cd  %~dp0%nativeScript && npm install"
echo. 
echo [+] installing angular prerequisites.
cmd.exe /C "cd  %~dp0%angular && npm install"
echo.
echo [+] installing angular assets prerequisites.
cmd.exe /C "cd  %~dp0%angular\src\assets && bower install"

echo.
echo.
echo [*] DONE! YOU CAN CLOSE NOW.
pause