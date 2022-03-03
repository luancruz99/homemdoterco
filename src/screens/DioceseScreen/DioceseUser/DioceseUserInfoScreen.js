import React from 'react';
import { Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import { useStateValue } from '../../../contexts/StateContext';

import LinearGradient from 'react-native-linear-gradient';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Background from '../../../components/background';
import { styles } from '../../../styles';


export default () => {
   const [context, dispatch] = useStateValue();
   
   return (
      <SafeAreaView style={styles.container}>
         <Background />
         <View style={styles.container2}>
            <Image style={styles.infoImage} source={{ uri: context.objectData.user.imageUrl }} />
            <LinearGradient start={{ x: 0.5, y: 0.5 }} style={styles.absoluteLinearGradient} colors={['#dabe7b00', '#e8d6ac']} />
            <TouchableOpacity style={styles.editButton}>
               <FontAwesomeIcon icon={faPenToSquare} size={20} color={'#fff'} />
            </TouchableOpacity>



            <ScrollView style={styles.infoArea}>
               <View style={styles.infoObjectArea}>
                  <Text style={styles.infoObjectName}>{context.objectData.user.name} {context.objectData.user.lastName}</Text>
               </View>
               <Text style={styles.generalInfoObject}>{context.objectData.user.occupation}</Text>
               
               <Text style={styles.generalInfoObject}></Text>
               
               <Text style={styles.generalInfoObject}>Email: {context.objectData.user.email}</Text>
               <Text style={styles.generalInfoObject}>Contato: </Text>
               
               <Text style={styles.generalInfoObject}></Text>

               <Text style={styles.generalInfoObject}>{context.objectData.user.adress}, {context.objectData.user.number}</Text>
               <Text style={styles.generalInfoObject}>{context.objectData.user.district} - {context.objectData.user.cep}</Text>
               {context.objectData.user.complement!='' && <Text style={styles.generalInfoObject}>{context.objectData.user.complement}</Text>}
               <Text style={styles.generalInfoObject}>{context.objectData.user.city} - {context.objectData.user.state}</Text>
               
               

            </ScrollView>
         </View>
      </SafeAreaView>

   );
}