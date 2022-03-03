import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import { useStateValue } from '../../../contexts/StateContext';

import { Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Background from '../../../components/background';
import { styles } from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


export default () => {
   const [context, dispatch] = useStateValue();

   return (
      <SafeAreaView style={styles.container}>
         <Background />
         <View style={styles.container2}>
            <Image style={styles.infoImage} source={{ uri: context.objectData.event.imageUrl }} />
            <LinearGradient start={{ x: 0.5, y: 0.5 }} style={styles.absoluteLinearGradient} colors={['#dabe7b00', '#e8d6ac']} />
            <TouchableOpacity style={styles.editButton}>
               <FontAwesomeIcon icon={faPenToSquare} size={20} color={'#fff'} />
            </TouchableOpacity>



            <ScrollView style={styles.infoArea}>
               <View style={styles.infoObjectArea}>
                  <Text style={styles.infoObjectName}>{context.objectData.event.name}</Text>
               </View>
               <Text style={styles.generalInfoObject}>{context.objectData.event.data}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.event.hour} </Text>
               <Text style={styles.generalInfoObject}>{context.objectData.event.local} </Text>
               <Text style={styles.generalInfoObject}>{context.objectData.event.city}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.event.state}</Text>

            </ScrollView>
         </View>
      </SafeAreaView>

   );
}