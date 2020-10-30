# Quick Login Application with React-Native

We will be building a mobile application which enables employees check in and out to the office system after scanning a QR code. This tutorial will guide beginners in installing React-Native, working with third party libraries and  the concept of data management using State and Props.

We will be using react-Native for the following reasons:
* Since it is based on JavaScript, we do not need to learn a whole new language in order to use it
* It is easy to incorporate third-party libraries and connect to APIs

This tutorial will focus mainly on data management in React-Native using <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">hooks</a>.

## The App
Before we dive into building the app, let us go through the flow of the application. 



<img src="https://raw.githubusercontent.com/Cressence/single-files/main/flowchart.png" height="350" title="flow chart">



* First, we have a screen which permits employees enter thier employee id and then directs the employee to the QR Code reader
* After the user scans the code, we make a call to the local server which will return the user information check-in/check-out time.
* When check-in/check-out process is complete, we then move a user to the log screen.

For example, if I was using a QR CODE reader application to get data from a QR Code, I would
 * Open the QR Code reader
 * Scan the document (QR code)
 * The app will follow the instructions gotten from the code. In this example open a particular link.

 Youtube link of sample app: https://www.youtube.com/watch?v=04Ir7xRuw5U

 **NB:**  This tutorial will not cover how to generate QR Codes.

This tutorial is for beginners and you will need to have some knowledge on the following topics:
* JavaScript (ES6)
* React

We will be working with:
* Node v10.22.1
* npm v6.14.6
* React-Native v0.63.3
* React-navigation v5.7.6
* React-native-qrcode-scanner v1.4.1



## Getting Started

### Prerequisites
In order to start coding, we will be using the **React Native CLI Quickstart**. We need to install / setup the following:

* Node
* Watchman
* iOS / Android setup


#### Install Node
Visit https://nodejs.org/en/ to download the node setup fro your OS. Click and install.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/Screen%20Shot%202020-10-17%20at%2018.01.40.png" height="250" title="Node installation">

Run the command to verify if node and npm was successfully installed
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

** NB (For Android):** Add a **local.properties** file in the ```android``` folder with the following line of code
```
sdk.dir=/path to android sdk/Android/sdk
```
In order to get the path, you can open your android studio, go to SDK manager and under System Settings, click Android SDK and copy the path.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/android%20sdk.png" height="300" title="SDK path">


Incase you want to install the starter project,  
* clone repository https://github.com/Cressence/quick-login/tree/project-setup, 
* Install dependencies using ```yarn install / npm install``` 
* Run then project!

You will see this screen after successful project setup

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/success-screen.png" height="300" title="React-native bare project">

In, this tutorial, we will be using ```useState``` to manage, display and update data in our application.


## Getting Hands Dirty

### Setting up navigation

Navigation enables us move from one screen to another, we will setup navigation using ```react-navigation```. In order to set it up, refer to https://reactnavigation.org/docs/getting-started.

After installation, 

* create src/screens/main
* src/screens/logs
* src/screens/scanner

folders in the root folder. Your project src folder should look like this.

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

We now have our navigation setup and connected to all screen. Now we move to the main screen. 

Every application has data which is displayed to the user and it changes from time to time depending on user action on that application. In React, we have two major ways of managing data i.e passing data from one component to another and changing data within a component. So we have **Props** (which is short for properties) and **States**. First, we must know they are both JavaScript objects and they both affect what is displayed in our app so it gets alot of beginners confused. 

State of a component in react is a JavaScript object which contains data of that component at that instance. This data can be changed within the component by user action. For example, imagine you have a hot cup of dark coffee with no sugar. At that very moment, the hot water and dark coffee make up the state of that cup of coffee. So if we let it cool for some time, it becomes cold. So far we have updated our breverage from a hot cup of dark coffee to a cold cup of dark coffee. Nothing has been added into our cup. So, the coffee and hot water make up the state of the cup of cofee.

Props of a component in react is a JavaScript object containing data which is passed to the component. In our above example, we currently have a cold cup of dark coffee. In order to have a hot cup of sweet Cafe Au Lait (coffee with milk), we will add 3 cubes of sugar, add more hot water or some heat and finally some milk. In this case, we have achieved our desired output. The sugar, heat (or extra hot water) and milk are passed to our cup of coffee in order to change the taste and look. They make up the props of the cup of coffee.


**More:** Visit the following links to know more about <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">States</a> and <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">Props</a>


In the src/screens/main/main.js file, add the following
```
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './main.style';

const Main = ({navigation}) => {
  const [code, setCode] = useState('');

  const movetoScanner = () => {
    if (code.length > 0) {
      navigation.navigate('Scanner', {userCode: code});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Great Crop Limited</Text>
      <Text style={styles.label}>Employee ID:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <TouchableOpacity style={styles.payBtn} onPress={movetoScanner}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
```


In src/screens/main/main.style.js file, add the following style
```
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'indigo',
    paddingHorizontal: '18%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  payBtn: {
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 5,
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
```

You should now have this screen

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/main-screen.png" height="250" title="Main Screen">

Notice the use of ```useState``` in the file. Let's get more into it.


<a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">Hooks</a> are added in React 16.8, to enable us use states without using class components. Going back to our application, we see that in our src/main.js file, we import our **setState** from react and then set an initial value of our state. 

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/code%20explanation.png" height="250" title="SDK path">

 (1) We import useState from react

 (2) We create a variable ```code``` which will store the value of the employee Id when the user enters it.

 (3) We create a function ```setCode``` which will update the value of code in (2) as the user will be typing.

 (4) We set an initial value for our state ```code``` in (2) above

 (5) We update the state of our component using ```setCode``` with the value of the input as the user is typing.

After the employee types the unique Id, we will validate the code to make sure the user enters an Id and then move to the next component passing it the employee Id.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/navigation.png" height="450" title="navigation">

(1) We call the ```movetoScanner``` function when the button is clicked

(2) We check that the user has entered some data at the moment he clicks the login button.

(3) We navigate to the scanner screen passing it to the employee Id as ```userCode```. The Scanner component receives the employee Id as a prop.


In the scanner screen, we will receive the ```userCode``` prop. We the use the **react-native-qrcode-scanner** library to get the data from the QR code. Then build an object containing the employee id, name, position, and date for check-in/check-out. We will then send this data to the logs screen using **navigation**. 

Let's get started! In src/screens/scanner/scanner.js file,

* Make sure to follow every step of the installation procees when installing the package **react-native-qrcode-scanner** https://github.com/moaazsidat/react-native-qrcode-scanner.
**NB:** If you encounter a white screen or an error after installing this package, install ```react-native-permissions``` in the project by running 
```
yarn add react-native-permissions/ npm install react-native-permissions
```

Next add the following code to use the package in our project
```
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import styles from './scanner.style';

const Scanner = ({navigation, route}) => {
  const onSuccess = (e) => {
    const jsonData = JSON.parse(e.data.toString());

    navigation.navigate('Logs', {
      user: {
        id: route.params ? route.params.userCode : 'Guest',
        name: jsonData.name,
        position: jsonData.position,
        date: ndate: new Date().toUTCString(),
      },
    });
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      fadeIn={false}
      flashMode={RNCamera.Constants.FlashMode.auto}
      containerStyle={styles.container}
      cameraStyle={styles.camera}
      topContent={
        <View style={styles.topContainer}>
          <Text style={styles.centerText}>
            Scan the code in order to continue login
          </Text>
        </View>
      }
      bottomContent={
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

export default Scanner;
```

And in src/screens/scanner/scanner.style.js

```
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#fff',
  },
  buttonTouchable: {
    backgroundColor: 'indigo',
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 5,
    marginTop: 30,
  },
  camera: {
    height: 200,
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
```

You should be able to see these screens

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/scanner-screen.png" height="450" title="navigation">

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/permission.png" height="450" title="navigation">



(1) We import our third party library QRCodeScanner from react-native-qrcode-scanner

(2) We recieve the navigation from App.js and route props from the main.js

(3) We create a scanner component.

(4) We call a function ```onSuccess``` when the QR code reader is complete.

(5) We create the ```onSuccess``` function which will navigate to the Logs screen while passing the user data to it.

(6) We check if there is a prop named **userCode**, we assign the value of that prop to the employee id field and if false we assign the value **Guest**.

There it is, we have successfully integrated a library in our react-native application.

**Test:** You can use http://goqr.me to generate QR Code with this format ```{"name": "Tommy Jane", "position": "Marketer"}``` and test the appliation

Finally, let us display our employee data. Enter the code below in src/screens/logs/logs.js

```
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {userLogs} from './../../apiHandler/userLogs'; // Step (1)

import styles from './logs.style';

const Logs = ({navigation, route}) => { // Step (2)
  userLogs.push({
    id: route.params.user.id,
    name: route.params.user.name,
    position: route.params.user.position,
    date: route.params.user.date,
    checkin: true,                      // Step 3
  });

  const checkout = () => {    // Step 5
    userLogs.push({
      id: route.params.user.id,
      name: route.params.user.name,
      position: route.params.user.position,
      date: new Date().toLocaleString(),
      checkin: false,
    });
    navigation.navigate('Main');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Employee Log</Text>
        <TouchableOpacity style={styles.checkOutBtn} onPress={checkout}>  // Step 4
          <Text>Check-out</Text>
        </TouchableOpacity>
      </View>

      {userLogs.map((logs, index) => (    // Step 6
        <View key={index} style={styles.card}>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>ID:</Text> <Text>{logs.id}</Text>
          </Text>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>Name:</Text> <Text>{logs.name}</Text>
          </Text>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>Position:</Text>{' '}
            <Text>{logs.position}</Text>
          </Text>
          <Text style={styles.textValue}>
            {logs.checkin ? (
              <Text style={styles.greenText}>Check-in: </Text>
            ) : (
              <Text style={styles.redText}>Check-out: </Text>
            )}
            <Text>{logs.date}</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Logs;
```

And in src/screens/logs/logs.style.js, add the following style

```
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'indigo',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  textValue: {
    fontSize: 16,
    marginVertical: 3,
  },
  greenText: {
    color: 'green',
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  checkOutBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default styles;
```

You should see the logs screen

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/logs-screen.png" height="450" title="navigation">

In order to diplsay the logs for an employee check in and check out, we will add a little login to our code. In src/apiHandler/userLogs.js, we declare a variable which will store the user log information. Add this to the file 

```
export const userLogs = [];
```

In the Logs.js file, 

(1) We first import the Logs array.

(2) We will add a new item to the logs array whenever the Logs component is opened. 

(3) We add a boolean attribute ```checkin``` to the check-in data and set it to true. So that we know that the user is checking in and to false when he is checking out.

(4) We add a checkout button to call a our checkout function when the user clicks the button.

(5) We will update our userLogs array with the value of the user's information but set the ```checkin``` attribut to false.

(6) We will now loop through the ```userLogs``` array and display the user information using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a> function.


There it is, our complete login application using QR code in react-native.

## More Information

You can checkout the code repository to explore and test the application here: https://github.com/Cressence/quick-login

To know more about React-native, you can visit the official documentation https://reactnative.dev/docs/getting-started

If you have any questions or feedback, you can contact me on twitter: https://twitter.com/cressy41262135
