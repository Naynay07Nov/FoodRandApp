import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FRHome from './screens/FRhome';
import Random from './screens/Random';
import FoodHome from './screens/FoodHome';
import { NavigationContainer } from '@react-navigation/native';
import RootStack1 from './navigations/RootStack1';


export default function App() {
  return (

    <NavigationContainer>
        <RootStack1/>
    </NavigationContainer>
 
    //<Random/>
  );
}
//const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
    //backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent: 'center',
 // },
//});
