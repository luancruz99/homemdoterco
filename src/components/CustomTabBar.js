import React, { useState, useEffect } from "react";
import { useStateValue } from '../contexts/StateContext';

import {
   View,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   Keyboard
}
from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faMagnifyingGlass, faCircleInfo, faChurch } from '@fortawesome/free-solid-svg-icons';


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
                  iconName = faPlusSquare;
                  break;
               case 'HomeScreen':
                  iconName = faHouse;
                  break;
               case 'DioceseTabSearch':
                  iconName = faMagnifyingGlass;
                  break;
               case 'ObjectInfo':
                  iconName = faCircleInfo;
                  break;
               case 'ObjectUser':
                  iconName = faUser;
                  break;
               case 'ObjectEvent':
                  iconName = faCalendarAlt;
                  break;
               case 'ObjectChild':
                  iconName = faChurch;
                  break;
            }

            if (context.data.user.token != 'master' || keyboardOpen) {

               
               return (null);

            } else {
               if (route.name === 'HomeScreen') {
                  return (

                     <TouchableOpacity key={index} activeOpacity={1} underlayColor='transparent' style={styles.homeTab} onPress={handleTabPress}>
                        <FontAwesomeIcon icon={iconName} size={45} color={'#fff'} />

                        <Text style={[styles.homeLabel]}>{label}</Text>
                     </TouchableOpacity>
                  );
               } else {
                  return (
                     <TouchableOpacity key={index} activeOpacity={1} underlayColor='transparent' style={styles.tab} onPress={handleTabPress}>
                        <FontAwesomeIcon icon={iconName} size={isFocused ? 43 : 38} color={isFocused ? '#000' : '#ccc'} />

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