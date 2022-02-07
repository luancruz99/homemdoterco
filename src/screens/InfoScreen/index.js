import React from 'react';
import { Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default InfoScreen = ({route}) => {
   console.log(route.params.item);
   return route.params.item.token!='9d01df59-31e4-4fc4-b11b-5876e988bde9'?
   <Text>Token: {route.params.item.token}</Text>:
   <SafeAreaView style={{justifyContent:'center',height: '100%', width: '100%', backgroundColor:'#000'}}>
      <Image style={{height:'100%', width:'100%', position:'absolute'}} 
      source={{uri: "https://thumbs.dreamstime.com/z/macaco-grande-na-grama-verde-39323850.jpg"}}/>
      <Text style={{color:'#fff', fontSize:50, alignSelf:'center'}}>O coisinha linda</Text>
   </SafeAreaView>
      
   
}
