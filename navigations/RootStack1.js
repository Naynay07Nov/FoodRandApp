import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomMenu from "./BottomMenu";


const Stack = createStackNavigator();

export default function RootStack1() {
  return (
    <Stack.Navigator initialRouteName="BottomMenu">
      <Stack.Screen name="BottomMenu" component={BottomMenu} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  );
}
