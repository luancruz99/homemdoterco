import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../contexts/StateContext';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database'
import {
   ScrollView,
   SafeAreaView,
   View,
   Text,
   Image,
   TouchableOpacity,
   TextInput,
   FlatList
}
from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../styles';

import AbreviateStates from '../../components/AbbreviateStates'
import Background from '../../components/background';


export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();
   const [list, setList] = useState();
   const [searchText, setSearchText] = useState('');
   
   

   useEffect(() => {
      let orderState;
      database().ref('/bd/diocese').on('value', (snapshot) => {
         let state = [];

         snapshot.forEach((childItem) => {
            state.push({
               token: childItem.val().token,
               name: childItem.val().name,
               estado: childItem.val().estado,
               cidade: childItem.val().cidade,
               imageUrl: childItem.val().imageUrl,
            });
            orderState = state;
         });
         
         state.length>1?orderState.sort((a,b)=>(a.name>b.name)?1:(b.name>a.name)?-1:0):'';
         
         
         if (searchText === '') {
            setList(orderState);
         } else {
            setList(
               orderState.filter(item => {
                  if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                     return true;
                  } else if (item.cidade.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                     return true;
                  } else {
                     return false;
                  }
               })
            );
         }
      });

   }, [searchText]);




   return (
      <SafeAreaView style={styles.container}>
         <Background />


         <View style={styles.headerArea}>
            <View style={styles.welcomeArea}>
               <Text style={styles.welcomeText}>Diocese</Text>
            </View>

            <Image style={styles.smallLogo} source={require('../../assets/logo_diocese.png')} />
         </View>

         <TextInput
            style={styles.input}
            placeholder='Digite um nome'
            value={searchText}
            onChangeText={(t) => { setSearchText(t) }}
         />

         <View style={styles.searchArea}>
            <FlatList
               data={list}
               renderItem={({ item }) => {
                  return (
                     <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('InfoScreen', {item})}} style={styles.searchResultArea}>
                           <View style={styles.resultImageArea}><Image style={styles.resultImage} source={{uri:item.imageUrl}} /></View>
                           
                           <View style={styles.resultTextArea}>
                              <Text style={styles.restultText}>{item.name}</Text>
                              <Text style={styles.resultSubText}>{item.cidade} - {AbreviateStates(item.estado)}</Text>
                           </View>
                        </TouchableOpacity>
                        <View style={styles.resultSeparator} />
                     </View>
                  );
               }}
            />
         
         </View>


      </SafeAreaView>
   );
};