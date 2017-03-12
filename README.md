# Repository for 狼人杀 app client side code

This repo is aiming at delivering cross-platform solution (ios, android and web) for this app

## Framework and tech stack
1. Cordova
2. Vue.js
3. Semantic UI
4. Build Tools: gulp, webpack
5. Node.js

## Get Started
1. Clone the reporsitory
2. Install [Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/)
3. Cd to app/ directory, and run the following commands:
```javascript
cordova platform add browser
cordova platform add ios
cordova requirements
```
4. Please check the **requirement report** to see what modules/packages you are missing in order to run a platform. Normally there isn't anything special for **browser**, but there are tons of dependencies for **ios** and **android**.
5. Cd to app/vueueproject
6. Run the following commands
```javascript
// install necessary packages
sudo npm install

// Right now the environment is configured to run as DEV for debugging purposes
// Eventually will build in prod environment.
sudo npm run build
cd ..
cordova build <platform>    // platform = ios/andriod/browser
cordova run <platform>
```

## NOTE
* When running for browser, you could navigate to the prompted local address in command line to checkout, but it is pretty ugly there I believe, because we will focus on mobile experience first.
* When running for iOS, please make sure you have installed all dependencies before running it. And please try running it on simulator only, as I believe you need developer signature/certificate to run it on actual device.
