import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';
import LinearGradient from 'react-native-linear-gradient';
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

import api from '../../services/api';
import database from '@react-native-firebase/database'

import Background from '../../components/background';
import { styles } from '../../styles';

export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();
   const [lista, setLista] = useState([]);

   useEffect(() => {
      database().ref('/bd/diocese').on('value', (snapshot) => {
         let state = lista;
         state = [];

         snapshot.forEach((childItem) => {
            state.push({
               token: childItem.val().token,
               name: childItem.val().name,
               cep: childItem.val().cep,
               estado: childItem.val().estado,
               cidade: childItem.val().cidade,
               bairro: childItem.val().bairro,
               endereco: childItem.val().endereco,
               numero: childItem.val().numero,

            });
            console.log(state);

         });
         setLista(state);
      });
   }, []);


   return (
      <SafeAreaView style={styles.container}>
         <Background />


         <View style={styles.headerArea}>
            <View style={styles.welcomeArea}>
               <Text style={styles.welcomeText}>Diocese</Text>
            </View>

            <Image style={styles.smallLogo} source={require('../../assets/logo_diocese.png')} />
         </View>

         <TextInput style={styles.input} placeholder='Digite um nome...' />

         <View style={styles.searchArea}>
            <FlatList
               data={lista}
               renderItem={({ item }) => {
                  return (
                     <View>
                        <TouchableOpacity style={styles.searchResultArea}>
                           <View style={styles.resultImageArea}><Image style={styles.resultImage} source={require('../../assets/paroquia.png')} /></View>
                           <View style={styles.resultTextArea}>
                              <Text style={styles.restultText}>{item.name}</Text>
                              <Text style={styles.resultSubText}>{item.cidade} - {item.estado}</Text>
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