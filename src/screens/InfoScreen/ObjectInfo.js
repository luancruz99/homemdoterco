import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import { useStateValue } from '../../contexts/StateContext';

import { Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Background from '../../components/background';
import { styles } from '../../styles';

export default InfoScreen = () => {
   const [context, dispatch] = useStateValue();

   return (
      <SafeAreaView style={styles.container}>
         <Background />
         <View style={styles.container2}>
            <Image style={styles.infoImage} source={{ uri: context.objectData.object.imageUrl }} />
      
            <ScrollView style={styles.infoArea}>
               <View style={styles.infoObjectArea}>
                  <Text style={styles.infoObjectName}>{context.objectData.object.name}</Text>
               </View>
               <Text style={styles.generalInfoObject}>{context.objectData.object.endereco}, {context.objectData.object.numero}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.object.bairro} - {context.objectData.object.cep}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.object.cidade} - {context.objectData.object.estado}</Text>
               <Text style={[styles.generalInfoObject, {marginTop:20}]}>Total de membros:  2437</Text>

            </ScrollView>
         </View>
      </SafeAreaView>

   );
}