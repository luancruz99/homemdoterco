import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import { useStateValue } from '../../../contexts/StateContext';

import { Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Background from '../../../components/background';
import { styles } from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


export default InfoScreen = () => {
   const [context, dispatch] = useStateValue();

   return (
      <SafeAreaView style={styles.container}>
         <Background />
         <View style={styles.container2}>
            <Image style={styles.infoImage} source={{ uri: context.objectData.diocese.imageUrl }} />
            <LinearGradient start={{ x: 0.5, y: 0.5 }} style={styles.absoluteLinearGradient} colors={['#dabe7b00', '#e8d6ac']} />
            <TouchableOpacity style={styles.editButton}>
               <FontAwesomeIcon icon={faPenToSquare} size={20} color={'#fff'} />
            </TouchableOpacity>



            <ScrollView style={styles.infoArea}>
               <View style={styles.infoObjectArea}>
                  <Text style={styles.infoObjectName}>{context.objectData.diocese.name}</Text>
               </View>
               <Text style={styles.generalInfoObject}>{context.objectData.diocese.adress}, {context.objectData.diocese.number}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.diocese.district} - {context.objectData.diocese.cep}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.diocese.city} - {context.objectData.diocese.state}</Text>
               <Text style={[styles.generalInfoObject, { marginTop: 20, marginBottom:50 }]}>{context.objectData.diocese.biography}</Text>
               <Text style={[styles.generalInfoObject, { marginTop: 20 }]}>Total de membros:  2437</Text>

            </ScrollView>
         </View>
      </SafeAreaView>

   );
}