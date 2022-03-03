import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen/';
import DioceseTab from './DioceseTab';
import SelectedDioceseTab from "./SelectedDioceseTab";
import DioceseUserRegister from '../screens/DioceseScreen/DioceseUser/DioceseUserRegister';
import DioceseUserInfoScreen from "../screens/DioceseScreen/DioceseUser/DioceseUserInfoScreen";
import DioceseChildRegister from '../screens/DioceseScreen/DioceseChild/DioceseChildRegister';
import DioceseChildInfoScreen from "../screens/DioceseScreen/DioceseChild/DioceseChildInfoScreen";
import DioceseEventRegister from '../screens/DioceseScreen/DioceseEvent/DioceseEventRegister'
import DioceseEventInfoScreen from '../screens/DioceseScreen/DioceseEvent/DioceseEventInfoScreen'

const MainStack = createStackNavigator();

export default () => (
   <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="DioceseTab" component={DioceseTab} />
      <MainStack.Screen name="DioceseInfoScreenTab" component={SelectedDioceseTab} />
      <MainStack.Screen name="DioceseUserRegister" component={DioceseUserRegister} />
      <MainStack.Screen name="DioceseChildRegister" component={DioceseChildRegister} />
      <MainStack.Screen name="DioceseEventRegister" component={DioceseEventRegister}/>
      <MainStack.Screen name="DioceseUserInfoScreen" component={DioceseUserInfoScreen}/>
      <MainStack.Screen name="DioceseChildInfoScreen" component={DioceseChildInfoScreen}/>
      <MainStack.Screen name="DioceseEventInfoScreen" component={DioceseEventInfoScreen}/>

   </MainStack.Navigator>
);