# Quick Payment Application with React-Native

We will be building a mobile application which enables employees check in and out to the office system after scanning a QR code. This tutorial will showcase the concept of data management in React-Native for beginners.

We will be using react-Native for the following reasons:
* Since it is based on JavaScript, we do not need to learn a whole new language in order to use it
* It is easy to incoporate third-party libraries and connect to APIs

This tutorial will focus mainly on data management in React-Native using <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">hooks</a> and <a href="https://github.com/react-native-async-storage/async-storage" target="_blank">AsyncStorage</a>

## The App
Before we dive into building the app, let us go through a the flow of the application. 

Add user flow here

* First we have a screen which permits employees enter thier employee id and then directs the user to the QR Code reader
* After the user scans the code, we make a call to the local server which will return the user information login time.
* When login process is complete, we then move a user to the log screen.

For example, if I was using a QR CODE reader application to get data from a QR Code, I would
 * Open the QR Code reader
 * Scan the document
 * The app will follow the instructions gotten from the code. In this example open a particular link.

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" width="150" title="Sample app flow">

 **NB:**  This tutorial will not cover how to generate QR Codes.

This tutorial is for beginners and you will need to have some knowledge on the following topics:
* JavaScript (ES6)
* React

We will be working with:
* Node v10.22.1
* npm v6.14.6
* React-Native v0.63.3




## Getting Started

### Prerequisites
In order to start coding, we will be using the **React Native CLI Quickstart**. We need to install / setup the following:

* Node
* Watchman
* iOS / Android setup


#### Install Node
Visit https://nodejs.org/en/ to download the node setup fro your OS. Click and install.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/Screen%20Shot%202020-10-17%20at%2018.01.40.png" height="250" title="Node installation">

Run the command to vreify if node and npm was successfully installed
```
node -v
```
```
npm -v
```

#### Install Watchman
To install watchman, visit their official site here https://facebook.github.io/watchman/docs/install.html

On Linux / MacOS run:
```
brew update
brew install watchman
```

```
sudo port install watchman
```
On Wndows (from the official watchman site https://facebook.github.io/watchman/docs/install.html), follow the instructions:

* Download and extract the windows release from the latest release (https://github.com/facebook/watchman/releases/tag/v2020.09.21.00).
* It will be named something like watchman-vYYYY.MM.DD.00-windows.zip
* It contains a bin folder. Move that somewhere appropriate and update your PATH environment to reference that location.


#### iOS / Android Setup
You can follow the steps found in the official React-Native documentation (https://reactnative.dev/docs/0.60/getting-started)


#### Project setup
To create a new React-Native project run 
```
npx react-native init PROJECTNAME --version 0.63.3
```

If you have that version installed locally, run 

```
react-native init PROJECTNAME
```
After project creation is successfull, run
```

cd PROJECTNAME

run-android/react-native run-ios
```

** NB (For Android):** Add a **local.properties** in ```android``` folder with the followig line of code
```
sdk.dir=/path to android sdk/Android/sdk
```
In order to get the path, you can open your android studio, go to SDK manager and under System Settings, click Android SDK and copy the path.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/android%20sdk.png" height="300" title="SDK path">


Incase you want to install the starter project,  clone repository https://github.com/Cressence/quick-login/tree/project-setup, install dependencies using ```yarn install / npm install``` and the run then project!

You will see this screen after successful project setup

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/success-screen.png" height="300" title="SDK path">

In, this tutorial, we will be using ```useState, useEffect``` to manage data in our application and we will be using JavaScript's ```Fetch API```to make http requests to our test server and log the user in.


## Getting Hands Dirty

### Setting up navigation

Navigation enable us move from one screen to another, we will setup navigation using ```react-navigation```. In order to set ip up, refer to https://reactnavigation.org/docs/getting-started.

After installation, create src/screens/main, src/screens/logs and src/screens/scanners folders in the root folder. Your project src folder should look like this.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/projectStructure-quick-login.png" height="250" title="SDK path">

 Now, go to App.js file and make the following changes 

```
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/screens/main/main';
import Scanner from './src/screens/scanner/scanner';
import Logs from './src/screens/logs/logs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logs"
          component={Logs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

```

We now have our navigation setup and connected to all screen. Now we move to the main screen. In the main.js file, add the following
```
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './main.style';

const Main = ({navigation}) => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Great Crop Limited</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => navigation.navigate('Scanner', {userCode: code})}>
        <Text>Pay With MTN Mobile Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
```
Notice the use of ```useState``` in the file. Let's get more into it.
