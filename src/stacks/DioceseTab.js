import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DioceseSearch from '../screens/DioceseScreen/DioceseInfo/DioceseSearch';
import DioceseRegister from '../screens/DioceseScreen/DioceseInfo/DioceseRegister';
import HomeScreen from '../screens/HomeScreen';


import DioceseCustomTab from '../components/CustomTabs/DioceseCustomTab';


const Tab = createBottomTabNavigator();

export default () => {
   

   return(
      <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <DioceseCustomTab {...props}/>}
      initialRouteName='DioceseTabSearch'
      backBehavior='none'
      >
         <Tab.Screen name='DioceseTabSearch' component={DioceseSearch} options={{tabBarLabel: 'Consulta'}}/>
         <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Início'}}/>
         <Tab.Screen name='DioceseTabRegister' component={DioceseRegister} options={{tabBarLabel: 'Cadastro'}}/>
      </Tab.Navigator>
   );
};