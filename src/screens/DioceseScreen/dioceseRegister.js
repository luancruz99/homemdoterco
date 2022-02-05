import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';
import {
   ScrollView,
   SafeAreaView,
   View,
   Text,
   Image,
   TouchableOpacity,
   TextInput,

}
from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import SimpleToast from 'react-native-simple-toast';
import uuid from 'react-native-uuid';

import api from '../../services/api';

import Background from '../../components/background';
import { styles } from '../../styles';

export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();
   const [avatar, setAvatar] = useState();
   const [name, setName] = useState('');
   const [cep, setCep] = useState('');
   const [estado, setEstado] = useState('');
   const [cidade, setCidade] = useState('');
   const [bairro, setBairro] = useState('');
   const [endereco, setEndereco] = useState('');
   const [numero, setNumero] = useState('');
   
   function imagePickerCallback(data){
      if(data.didCancel){
         return;
      }
      if(data.error){
         return;
      }
      if(!data.assets[0].uri){
         return;
      }

      setAvatar(data.assets[0])
   };

   function handleRegisterButton(){
      if(name==''||cep==''||estado==''||cidade==''||bairro==''||endereco==''||numero==''){
         SimpleToast.show('Preencha todos os campos!');
         return false;
      } else{
         let usuarios = database().ref('/bd/diocese');
         let token = uuid.v4();
         usuarios.child(token).set({
            
            token,
            name,
            cep,
            estado,
            cidade,
            bairro,
            endereco,
            numero
         });
         SimpleToast.show('Cadastro concluído!')
      }
   };

   return (
      <SafeAreaView style={styles.container}>
         <Background />


         <View style={styles.headerArea}>
            <View style={styles.welcomeArea}>
               <Text style={styles.welcomeText}>Diocese</Text>
            </View>

            <Image style={styles.smallLogo} source={require('../../assets/logo_diocese.png')} />
         </View>


         <ScrollView style={styles.registerArea}>
            
            <TouchableOpacity style={styles.imagePickerButton} onPress={() => launchImageLibrary({}, imagePickerCallback)}>
               <Image style={styles.imagePicker} source={{uri: avatar?avatar.uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}/>
            </TouchableOpacity>

            
            <TextInput style={styles.nameRegister} placeholder='Nome' onChangeText={(t)=>setName(t)}/>
            
            <View style={styles.RegisterArea}>
               <TextInput style={styles.halfRegister} keyboardType='number-pad' placeholder='CEP' onChangeText={(t)=>setCep(t)}/>
               <TextInput style={styles.halfRegister} placeholder='Estado' onChangeText={(t)=>setEstado(t)}/>
            </View>
            <View style={styles.RegisterArea}>
               <TextInput style={styles.halfRegister} placeholder='Cidade' onChangeText={(t)=>setCidade(t)}/>
               <TextInput style={styles.halfRegister} placeholder='Bairro' onChangeText={(t)=>setBairro(t)}/>
            </View>
            <View style={[styles.RegisterArea, {marginBottom:20}]}>
               <TextInput style={styles.adressRegister} placeholder='Endereço' onChangeText={(t)=>setEndereco(t)}/>
               <TextInput style={styles.numberRegister} keyboardType='number-pad' placeholder='Nº' onChangeText={(t)=>setNumero(t)}/>
            </View>
            
            <TouchableOpacity style={[styles.buttonArea, {backgroundColor:'#79a5a8', marginBottom: 20}]} onPress={handleRegisterButton}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
         </ScrollView>

      </SafeAreaView>
   );
};