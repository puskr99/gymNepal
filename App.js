import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,Button, Alert, Dimensions,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { StatusBar } from 'react-native';

import Home from './src/BottomTabScreens/Home'
import Members from './src/BottomTabScreens/Members'
import Profile from './src/BottomTabScreens/Profile'

import Register from './src/Components/Register'
import Login from './src/Components/Login'
import TestLogin from './src/Components/TestLogin'
import TestRegister from './src/Components/TestRegister'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {

  const [test,setTest] = useState(true);

  const BottomTabs = () => {
    return(
      <NavigationContainer>

      <Tab.Navigator
        initialRouteName='Feed'
        labeled = {true}
        activeColor='rgb(25,100,200)'
        shifting={true}
        screenOptions={{
          // tabBarColor:'rgb(25,100,200)'
        }}
      >
       <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icons name="home"  color={color} size={25} />
          ),
        }}
        component={Home} />

      <Tab.Screen
        name="Members"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icons name="book-open" color={color} size={25} />
          ),
        }}
        component={Members} />
  
        <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icons name="user" color={color} size={24} />
          ),
        }}
        component={Profile} />

      </Tab.Navigator>

    </NavigationContainer>
    )
  }

  return (
    <>
    { test 
    ? 
    <BottomTabs />
    :
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={TestLogin} />
      <Stack.Screen name="Register" component={TestRegister} />
    </Stack.Navigator>
    </NavigationContainer>
    }
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});