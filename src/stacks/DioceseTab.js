import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import dioceseSearch from '../screens/DioceseScreen/dioceseSearch';
import dioceseRegister from '../screens/DioceseScreen/dioceseRegister';
import HomeScreen from '../screens/HomeScreen';

import CustomTabBar from '../components/CustomTabBar';


const Tab = createBottomTabNavigator();

export default () => {
   

   return(
      <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <CustomTabBar {...props}/>}
      initialRouteName='DioceseTabSearch'

      >
         <Tab.Screen name='DioceseTabSearch' component={dioceseSearch} options={{tabBarLabel: 'Consulta'}}/>
         <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Home'}}/>
         <Tab.Screen name='DioceseTabRegister' component={dioceseRegister} options={{tabBarLabel: 'Cadastro'}}/>
      </Tab.Navigator>
   );
};