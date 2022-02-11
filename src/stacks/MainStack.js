import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen/';
import DioceseTab from './DioceseTab';
import DioceseInfoScreenTab from "./DioceseInfoScreenTab";
import DioceseUserRegister from '../screens/DioceseScreen/DioceseInfoScreen/DioceseUserRegister';

const MainStack = createStackNavigator();

export default () => (
   <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
      <MainStack.Screen name="DioceseTab" component={DioceseTab}/>
      <MainStack.Screen name="DioceseInfoScreenTab" component={DioceseInfoScreenTab}/>
      <MainStack.Screen name="DioceseUserRegister" component={DioceseUserRegister}/>
      
   </MainStack.Navigator>
);