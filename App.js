import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';


import firebase from 'firebase';


export default class App extends React.Component {

  
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC2KNrUgwTIKaQgZ_YFRAgo_jzvd4Pnys0",
      authDomain: "swimware-a0c1c.firebaseapp.com",
      databaseURL: "https://swimware-a0c1c.firebaseio.com",
      projectId: "swimware-a0c1c",
      storageBucket: "swimware-a0c1c.appspot.com",
      messagingSenderId: "506319870816"
    };
    firebase.initializeApp(config);
}

  render() {
    return (
      <AppNavigator />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


