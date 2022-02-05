import React, { useState, useEffect } from "react";
import api from "../services/api";
import {
   View,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   Keyboard
}
from 'react-native'
import { color } from "react-native-reanimated";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useStateValue } from '../contexts/StateContext';


export default CustomTabBar = ({ state, descriptors, navigation }) => {
   const [keyboardOpen, setKeyboardOpen] = useState(undefined);
   const [context, dispatch] = useStateValue();

   useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
         setKeyboardOpen(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
         setKeyboardOpen(false);
      });



      return () => {
         showSubscription.remove();
         hideSubscription.remove();
      };

   }, []);

   return (
      <View style={styles.container}>
         {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            let label = route.name;
            if (options.tabBarLabel != undefined) {
               label = options.tabBarLabel;
            } else if (options.title != undefined) {
               label = options.title;
            }

            const isFocused = state.index === index;

            const handleTabPress = () => {
               if (route.name === 'HomeScreen') {
                  navigation.popToTop();
               } else {
                  navigation.navigate(route.name)
               }
            }

            let iconName = null;

            switch (route.name) {
               case 'DioceseTabRegister':
                  iconName = 'plus-square'
                  break;
               case 'HomeScreen':
                  iconName = 'home'
                  break;
               case 'DioceseTabSearch':
                  iconName = 'search'
                  break;
            }

            if (context.userData.user.token != 'master' || keyboardOpen) {

               
               return (null);

            } else {
               if (route.name === 'HomeScreen') {
                  return (

                     <TouchableOpacity key={index} activeOpacity={1} underlayColor='transparent' style={styles.homeTab} onPress={handleTabPress}>
                        <FontAwesome name={iconName} size={45} color={'#fff'} />

                        <Text style={[styles.homeLabel]}>{label}</Text>
                     </TouchableOpacity>
                  );
               } else {
                  return (
                     <TouchableOpacity key={index} activeOpacity={1} underlayColor='transparent' style={styles.tab} onPress={handleTabPress}>
                        <FontAwesome name={iconName} size={isFocused ? 45 : 40} color={isFocused ? '#000' : '#ccc'} />

                        <Text style={[styles.label, isFocused ? styles.labelFocused : null]}>{label}</Text>
                     </TouchableOpacity>
                  );
               };
            };
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      backgroundColor: '#fff',

   },
   tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      borderTopWidth: 0.2,
      borderColor: '#cccccc90'

   },
   label: {
      fontSize: 13,
      color: '#ccc'
   },
   labelFocused: {
      fontSize: 13,
      color: '#000'
   },
   icon: {
      width: 40,
      height: 40,

   },
   homeTab: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      width: 80,
      marginTop: -12,
      borderRadius: 50,
      backgroundColor: '#dabe7b'
   },
   homeLabel: {
      fontSize: 13,
      color: '#fff'
   },
});