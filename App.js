import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, ActivityIndicator, DrawerLayoutAndroid } from 'react-native';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddSeller from './screens/AddSeller';
import Login from './screens/Login';
import Chat from './screens/Chat';
import Home from './screens/Home';
import { SearchBar } from 'react-native-elements';

Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home} >
      <Stack.Screen name='Home' component={Home}  options={{headerShown: false}} />
      <Stack.Screen name='Chat' component={Chat} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


function AuthStack() {
  const functionSync = promptAsync
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    </Stack.Navigator>
  );
}

function DrawerGroup(){
  return (
  <Drawer.Navigator useLegacyImplementation={false} >
    <Drawer.Screen name={'Messages'} component={ChatStack}/>
    <Drawer.Screen name='Add Seller' component={AddSeller} />
  </Drawer.Navigator>
  )
}

function RootNavigator() {
 
    return (
      <NavigationContainer>
        <DrawerGroup />
      </NavigationContainer>
    );

  };



export default function App() {

  WebBrowser.maybeCompleteAuthSession();


  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "560622160114-gdsd0pv8bma1f9mdpacfj8koghqadvit.apps.googleusercontent.com",
    expoClientId: "560622160114-hqf982shq1hh8hlgq0moh8i2nkagn09b.apps.googleusercontent.com"
  });

  const checkLocalUser = async() => {
    try{
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("local storage ", userData);
      setUserInfo(userData);
    }
    catch(e){
      alert(e.message);
    }
  }
  
  React.useEffect(() => {
    if (response?.type == "success"){
      const id_token = response.params;
      const credential = GoogleAuthProvider.credential(null, id_token.access_token.toString());
      signInWithCredential(auth, credential).catch((error) => {console.log(error);});
    }
  }, [response])

  React.useEffect(() => {
    // checkLocalUser();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        console.log(JSON.stringify(user, null, 2))
        setUserInfo(user)
      }else{
          console.log("Not Valid")
        }
      });
  
      return() => unsubscribe();

    },[]);

  if (!userInfo) {
    return(<Login promptAsync={promptAsync} />);
  }
  else{
    return(<RootNavigator />);
  }
}