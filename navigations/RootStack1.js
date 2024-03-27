import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomMenu from "./BottomMenu";
import RestaurantReview from "../screens/RestaurantReview";
import FRhome from "../screens/FRhome";


const Stack = createStackNavigator();

export default function RootStack1() {
  return (
    <Stack.Navigator initialRouteName="BottomMenu">
      <Stack.Screen name="BottomMenu" component={BottomMenu} options={{ headerShown: false }} />
      <Stack.Screen name="FRhome" component={FRhome} />
    </Stack.Navigator>
  );
}
