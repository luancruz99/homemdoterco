import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PrealoadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="PreloadScreen" component={PrealoadScreen}/>
         <Stack.Screen name="LoginScreen" component={LoginScreen}/>
         <Stack.Screen name="MainStack" component={MainStack}/>
      </Stack.Navigator>
   );
};