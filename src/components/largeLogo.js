import React from 'react'
import Image, {StyleSheet} from 'react-native'

export default function LargeLogo(){
   return(
      <Image style={styles.largeLogo} source={require('../images/logo_diocese.png')}/>
   );

}

const styles = StyleSheet.create({
   largeLogo: {
      width:250,
      height: 250,
   }

});