import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();

export default () => (
   <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
      
   </MainStack.Navigator>
);