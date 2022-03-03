import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DioceseInfoScreen from '../screens/DioceseScreen/DioceseInfo/DioceseInfoScreen';
import DioceseUser from '../screens/DioceseScreen/DioceseUser/DioceseUser';
import HomeScreen from '../screens/HomeScreen';
import DioceseEvent from '../screens/DioceseScreen/DioceseEvent/DioceseEvent';
import DioceseChild from '../screens/DioceseScreen/DioceseChild/DioceseChild';

import SelectedDioceseCustomTab from '../components/CustomTabs/SelectedDioceseCustomTab';

const Tab = createBottomTabNavigator();

export default () => {
   
   return(
      <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <SelectedDioceseCustomTab {...props}/>}
      initialRouteName='DioceseTabSearch'
      backBehavior='none'
      >
         <Tab.Screen name='DioceseInfo' component={DioceseInfoScreen} options={{tabBarLabel: 'Informações'}}/>
         <Tab.Screen name='DioceseUser' component={DioceseUser} options={{tabBarLabel: 'Usuários'}}/>
         <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Início'}}/>
         <Tab.Screen name='DioceseEvent' component={DioceseEvent} options={{tabBarLabel: 'Eventos'}}/>
         <Tab.Screen name='DioceseChild' component={DioceseChild} options={{tabBarLabel: 'Paróquias'}}/>
      </Tab.Navigator>
   );
};