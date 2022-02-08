import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ObjectInfo from '../screens/InfoScreen/ObjectInfo';
import ObjectUser from '../screens/InfoScreen/ObjectUser';
import HomeScreen from '../screens/HomeScreen';
import ObjectEvent from '../screens/InfoScreen/ObjectEvent';
import ObjectChild from '../screens/InfoScreen/ObjectChild';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => {
   
   return(
      <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <CustomTabBar {...props}/>}
      initialRouteName='DioceseTabSearch'

      >
         <Tab.Screen name='ObjectInfo' component={ObjectInfo} options={{tabBarLabel: 'Informações'}}/>
         <Tab.Screen name='ObjectUser' component={ObjectUser} options={{tabBarLabel: 'Usuários'}}/>
         <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Home'}}/>
         <Tab.Screen name='ObjectEvent' component={ObjectEvent} options={{tabBarLabel: 'Eventos'}}/>
         <Tab.Screen name='ObjectChild' component={ObjectChild} options={{tabBarLabel: 'Paróquias'}}/>
      </Tab.Navigator>
   );
};