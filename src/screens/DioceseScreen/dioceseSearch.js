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
} from 'react-native';
import { styles } from '../../styles';

import AbreviateStates from '../../components/AbbreviateStates'
import Background from '../../components/background';


export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();
   const [list, setList] = useState([]);
   const [searchText, setSearchText] = useState('');

   const selectDiocese = (item) => {
      dispatch({ type: 'setDiocese', payload: { diocese: item } });
      navigation.navigate('DioceseInfoScreenTab');
   };


   useEffect(() => {

      database()
         .ref('/bd/diocese')
         .on('value', (snapshot) => {
            let object = [];
            snapshot.forEach((childItem) => {
               object.push(childItem.val());

            });

            if (object) {
               object.length > 1 ? object.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0) : '';
               setList(
                  object.filter(item => {
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
                        <TouchableOpacity onPress={() => selectDiocese(item)} style={styles.searchResultArea}>
                           <View style={styles.resultImageArea}><Image style={styles.resultImage} source={{ uri: item.imageUrl }} /></View>

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