# Quick Payment Application with React-Native

We will be building a mobile application which enables you to allow payment after scanning a QR code. This tutorial will showcase the concept of data management in React-Native for beginners.

We will be using react-Native for the following reasons:
* Since it is based on JavaScript, we do not need to learn a whole new language in order to use it
* It is easy to incoporate third-party libraries and connect to APIs

## The App
Before we dive into building the app, let us go through a the flow of the application. 

Add user flow here

* First we have a screen which directs the user to the QR Code reader
* After the user scans the code, we make a call to the local mobile money service whoch will ask us to confirm payment.
* When transaction is complete, we then show a success or error message

For example, if I was using a QR CODE reader application to get data from a QR Code, I would
 * Open the QR Code reader
 * Scan the document
 * The app will follow the instructions gotten from the code. In this example open a particular link.

 **NB:**  This tutorial will not cover how to generate QR Codes.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" width="150" title="Sample app flow">

## Prerequisites
In order to start coding, we will be using the **React Native CLI Quickstart**. We need to install the following:

* Node
* Watchman
* iOS / Android setup
* React-Native V(add version here)


You also need to have some knowledge on the following topics:
* JavaScript (ES6)
* React


### Install Node
Visit https://nodejs.org/en/ to download the node setup fro your OS. Click and install.

<img src="https://raw.githubusercontent.com/Cressence/single-files/main/Screen%20Shot%202020-10-17%20at%2018.01.40.png" height="250" title="Node installation">

Run the command to vreify if node and npm was successfully installed
```
node -v
```
```
npm -v
```

### Install Watchman
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


### iOS / Android Setup
You can follow the steps found in the official React-Native documentation (https://reactnative.dev/docs/0.60/getting-started)

### Install React-Native


## Getting Started

