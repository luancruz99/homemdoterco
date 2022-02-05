import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { StateProvider } from './contexts/StateContext';

import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';
import DioceseTab from './stacks/DioceseTab';


export default function homemdoterco (){
  return (

    <StateProvider>
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    </StateProvider>        

    
    

  );
}

