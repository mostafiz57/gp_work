# Group work front-end
Web client for Group work

## Stack
This app is based on (M)EAN stack. 
Using Data base is MongoDB , hosting in mongoLab . 

## Dev tools
- nodejs and npm (of course)
- bower
- grunt
*Note*: You must install nodemon to run server in autoreload mode.

## Installation
### Step 0: install tools
- nodejs:
```bash
npm update
npm install
```
- bower
```bash
npm i -g bower
```
- grunt
```bash
npm i -g grunt-cli
```

### Step 1: clone this repo and install dependencies
```bash
cd server
npm install
cd ../client
npm install
bower install
```
If you've got error at any step, retry with npm.

### Step 2: Build the app then run server
```bash
cd client
grunt build
cd ../server
npm start
```

Open your browser and navigate to http://localhost:8080 to see it.
I will explain app structure later.