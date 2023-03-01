import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {NavigationContainer} from '@react-navigation/native';
import SearchMembers from '../Components/SearchMembers'

const Tab = createMaterialTopTabNavigator();

const Members = () => {

  const Tab1 =()=>{
    return(
      <>
      <StatusBar style="auto" />
      <Text>Hello</Text>
      </>
    )
  }

    return (
    <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="All Members" component={SearchMembers} />
      <Tab.Screen name="Expiring Soon!" component={Tab1} />
    </Tab.Navigator>
    
    </NavigationContainer>
    
  )
}

export default Members

const styles = StyleSheet.create({})