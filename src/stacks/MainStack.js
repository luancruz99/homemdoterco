import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen/';
import DioceseTab from './DioceseTab';

const MainStack = createStackNavigator();

export default () => (
   <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
      <MainStack.Screen name="DioceseTab" component={DioceseTab}/>
      
   </MainStack.Navigator>
);