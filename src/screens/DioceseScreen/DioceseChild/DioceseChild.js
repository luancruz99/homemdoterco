import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../../contexts/StateContext';
import database from '@react-native-firebase/database';
import {
   View,
   Text,
   Image,
   FlatList,
   TouchableOpacity,
   TextInput,
   SafeAreaView
} from 'react-native';

import AbreviateStates from '../../../components/AbbreviateStates'
import Background from '../../../components/background';
import { styles } from '../../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();
   const [list, setList] = useState();
   const [searchText, setSearchText] = useState('');

   let getFirstName = context.objectData.diocese.name.split(' ', 2);
   let firstName = `${getFirstName[0]} ${getFirstName[1]}`;
   let lastName = context.objectData.diocese.name.substring(firstName.length + 1);

   const handleRegisterButton = () => {
      navigation.navigate('DioceseChildRegister');
   };

   const selectChild = (item) => {
      dispatch({ type: 'setParoquia', payload: { paroquia: item } });
      navigation.navigate('DioceseChildInfoScreen');
   };

   useEffect(() => {

      database()
         .ref('/bd/paroquia')
         .orderByChild('belongsTo')
         .equalTo(context.objectData.diocese.token)
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
                     } else if (item.city.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
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



         <View style={styles.headerUserArea}>
				<Image style={styles.objectSmallLogo} source={{ uri: context.objectData.diocese.imageUrl }} />
				<View style={{ flex: 1, height: 200, justifyContent: 'center' }}>
					<Text style={{ fontSize: 30, fontWeight: 'bold' }} >{getFirstName[0] + ' ' + getFirstName[1]}</Text>
					<Text style={{ fontSize: 20, top: -5 }} >{lastName}</Text>
				</View>
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
                        <TouchableOpacity onPress={() => selectChild(item)} style={styles.searchResultArea}>
                           <View style={styles.resultImageArea}><Image style={styles.resultImage} source={{ uri: item.imageUrl }} /></View>

                           <View style={styles.resultTextArea}>
                              <Text style={styles.restultText}>{item.name}</Text>
                              <Text style={styles.resultSubText}>{item.city} - {AbreviateStates(item.state)}</Text>
                           </View>
                        </TouchableOpacity>
                        <View style={styles.resultSeparator} />
                     </View>
                  );
               }}
            />

         </View>
         <View style={styles.absoluteView}>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegisterButton}>
               <FontAwesomeIcon color='#fff' icon={faPlus} size={35} />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}