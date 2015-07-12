# side-project
a side project from Kevin &amp; Geoff

---
NodeJS and npm are required.  
You can download a Node.js installer for your operating system from http://nodejs.org/download/.  
To compile the CSS you need Compass installed  
Run  sudo gem install compass

---
console commands:

From the top of the project:  

'npm install' - Install the dependencies in the local node_modules folder. Calls bower install behind the scenes  
'npm start' - start a local development web server. Find app at http://localhost:8000/app  
'npm test'  - start the karma unit test runner. Leave in background to watch code for changes -> run tests  
'npm run update-webdriver' - install drivers needed by Protractor     
'npm run protractor' - run the end to end tests

From app/style:  

'compass compile' - Create css files from sass files  
'compass watch' - Watch for changes to sass files and automatically output new css files

---
package.json holds configs for npm     
bower.json specifies dependencies 
