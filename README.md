Enlightened JavaScript Testing with Karma
=========================================

Slides and files from my Karma presentation at IndyJS on 11/20/2013

##Running the Demo
To run the demo, you need Node.js installed as well as a few Karma plugins.  

####It get up and running:

`npm install -g karma karma-qunit karma-teamcity-reporter karma-coverage karma-beep-reporter`

####Start Karma

Default configuration:
`karma start` 

CI and Coverage configuration:
`karma start karma.tc.conf.js`

####Potential Issues
If Karma can't find Chrome (most likely on 64bit Windows), the easiest solution is to set 
an environment variable with the path to the Chrome executable.

`SET CHROME_BIN=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

This works for all the browser plugins:
 - FIREFOX_BIN
 - IE_BIN
 - PHANTOMJS_BIN
 - CHROME_CANARY_BIN (if you're testing on the edge)
 
 
