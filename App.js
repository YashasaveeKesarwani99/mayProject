import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authenticate from './components/authenticate/authenticate'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import firebaseConfig from './utils/fbConfig'
import { NativeRouter, Route, Link } from "react-router-native";
import FirstPage from './components/firstPage'

export default function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
    
 }else {
    firebase.app(); // if already initialized, use that one
 }
  //firebase.initializeApp();

  return (
    <NativeRouter>
    <SafeAreaProvider>
    <Route path="/" exact component={FirstPage} />
      <Route path="/login" render={()=><Authenticate />}/>
    </SafeAreaProvider>
    </NativeRouter>
    
  )
}


