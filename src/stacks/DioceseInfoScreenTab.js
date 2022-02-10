import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DioceseInfo from '../screens/DioceseScreen/DioceseInfoScreen/DioceseInfo';
import DioceseUser from '../screens/DioceseScreen/DioceseInfoScreen/DioceseUser';
import HomeScreen from '../screens/HomeScreen';
import DioceseEvent from '../screens/DioceseScreen/DioceseInfoScreen/DioceseEvent';
import DioceseChild from '../screens/DioceseScreen/DioceseInfoScreen/DioceseChild';

import DioceseInfoCustomTabBar from '../components/DioceseInfoCustomTabBar';

const Tab = createBottomTabNavigator();

export default () => {
   
   return(
      <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <DioceseInfoCustomTabBar {...props}/>}
      initialRouteName='DioceseTabSearch'
      backBehavior='none'
      >
         <Tab.Screen name='DioceseInfo' component={DioceseInfo} options={{tabBarLabel: 'Informações'}}/>
         <Tab.Screen name='DioceseUser' component={DioceseUser} options={{tabBarLabel: 'Usuários'}}/>
         <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Início'}}/>
         <Tab.Screen name='DioceseEvent' component={DioceseEvent} options={{tabBarLabel: 'Eventos'}}/>
         <Tab.Screen name='DioceseChild' component={DioceseChild} options={{tabBarLabel: 'Paróquias'}}/>
      </Tab.Navigator>
   );
};