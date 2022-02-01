import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";



export default function Background (){
   return(

      <LinearGradient
         colors={['#dabe7b', '#ffffff']}
         style={styles.linearGradient}
      />
   );

}

const styles = StyleSheet.create({
   linearGradient: {
      position: 'absolute',
      width: '100%',
      height: Dimensions.get('window').height
   }  

});