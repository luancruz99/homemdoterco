import React, { useState, useEffect } from 'react';
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

import Background from '../../../components/background';
import { styles } from '../../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const [context, dispatch] = useStateValue();
  const [list, setList] = useState();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {

    database()
      .ref('/bd/users')
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
              } else if (item.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
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
        <Image style={styles.ObjectsmallLogo} source={{ uri: context.objectData.diocese.imageUrl }} />
      </View>

      <TextInput
        style={styles.input}
        placeholder='digite um nome'
        value={searchText}
        onChangeText={(t) => { setSearchText(t) }}
      />

      <View style={styles.searchArea}>
        <FlatList
          data={list}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={styles.searchResultArea}>
                  <View style={styles.resultTextArea}>
                    <Text style={styles.restultText}>{item.name + ' ' + item.lastname}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />

      </View>
      <View style={{ position: 'absolute', flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: 10 }}>
        <TouchableOpacity style={{ position: 'absolute', width: 50, height: 50, borderRadius: 25, bottom: 30, right: 40, backgroundColor: '#dabe7b', alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesomeIcon color='#fff' icon={faPlus} size={35} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}