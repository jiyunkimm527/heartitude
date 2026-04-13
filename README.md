# hertitude
hertitude webpage for the windows user 
1. Access the Antigravity website.
   https://antigravity.google/
2. Download for x64 download  (windows)
3. And I installed it by clicking the .exe file.
4. After installation,  create a website, and Node.js is required.

   a. Start menu → search for PowerShell → right-click → “Run as administrator.”

   b. install 

      winget install -e --id OpenJS.NodeJS.LTS

   c. Run the webpage.

      http://localhost:5173

   d. The command to run it again (only need to run it once).

      Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

 5.Command to run the webpage.

   a. move to project folder 
      
      cd <project folder> 
      
      npm run dev
  
   b. run web page 
      
      http://localhost:5173
