# Repository for 狼人杀 app client side code

This repo is aiming at delivering cross-platform solution (ios, android and web) for this app

## Framework and tech stack
1. Cordova
2. Vue.js
3. Semantic UI
4. Build Tools: gulp, webpack
5. Node.js

## Get Started
1. Clone the report
2. Cd to app/vueueproject
3. Run the following commands

```javascript
// install necessary packages
sudo npm install

// For dev
sudo npm run dev    // Then navigate to http://localhost:8080/#/

// For prod
sudo npm run build
cd ..
cordova build <platform>    // platform = ios/andriod/browser
cordova run <platform>
```