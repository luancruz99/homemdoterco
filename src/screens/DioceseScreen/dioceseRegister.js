import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
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
import { launchImageLibrary } from 'react-native-image-picker';
import SimpleToast from 'react-native-simple-toast';
import uuid from 'react-native-uuid';

import Background from '../../components/background';
import { styles } from '../../styles';
import { BorderlessButton } from 'react-native-gesture-handler';



export default () => {
   const navigation = useNavigation();
   const [avatar, setAvatar] = useState('');
   const [name, setName] = useState('');
   const [cep, setCep] = useState('');
   const [estado, setEstado] = useState('');
   const [cidade, setCidade] = useState('');
   const [bairro, setBairro] = useState('');
   const [endereco, setEndereco] = useState('');
   const [numero, setNumero] = useState('');

   function getPhoto() {
      launchImageLibrary({ mediaType: 'photo', maxWidth: 1280 }, (data) => {
         if (data.didCancel) {
            return;
         }
         if (data.error) {
            return;
         }
         if (!data.assets[0].uri) {
            return;
         }

         setAvatar(data.assets[0]);

      })
   };



   async function handleRegisterButton() {

      if (name == '' || cep == '' || estado == '' || cidade == '' || bairro == '' || endereco == '' || numero == '') {
         SimpleToast.show('Preencha todos os campos!');
         return false;
      } else {
         if (!avatar) {
            SimpleToast.show('Defina uma foto!');
            return false;
         }
         let type = 'diocese';
         let usuarios = database().ref('/bd/diocese');
         let token = uuid.v4();

         let uri = avatar.uri.replace('file://', '');
         let image = storage().ref('images/diocese').child(token);
         await image.putFile(uri);

         let imageUrl = await image.getDownloadURL();

         usuarios.child(token).set({

            token,
            name,
            cep,
            estado,
            cidade,
            bairro,
            endereco,
            numero,
            type,
            imageUrl,
         });
         SimpleToast.show('Cadastro concluído!');

         

         navigation.navigate('DioceseTabSearch');
      }
         setAvatar('');
         setName('');
         setCep('');
         setEstado('');
         setCidade('');
         setBairro('');
         setEndereco('');
         setNumero('');
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

            <TouchableOpacity style={styles.imagePickerButton} onPress={getPhoto}>
               <Image style={styles.imagePicker} source={{ uri: avatar ? avatar.uri : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }} />
            </TouchableOpacity>


            <TextInput style={styles.nameRegister} value={name} placeholder='Nome' onChangeText={(t) => setName(t)} />

            <View style={styles.RegisterArea}>
               <TextInput style={styles.halfRegister} value={cep} keyboardType='number-pad' placeholder='CEP' onChangeText={(t) => setCep(t)} />
               <TextInput style={styles.halfRegister} value={estado} placeholder='Estado' onChangeText={(t) => setEstado(t)} />
            </View>
            <View style={styles.RegisterArea}>
               <TextInput style={styles.halfRegister} value={cidade} placeholder='Cidade' onChangeText={(t) => setCidade(t)} />
               <TextInput style={styles.halfRegister} value={bairro} placeholder='Bairro' onChangeText={(t) => setBairro(t)} />
            </View>
            <View style={[styles.RegisterArea, { marginBottom: 20 }]}>
               <TextInput style={styles.adressRegister} value={endereco} placeholder='Endereço' onChangeText={(t) => setEndereco(t)} />
               <TextInput style={styles.numberRegister} value={numero} keyboardType='number-pad' placeholder='Nº' onChangeText={(t) => setNumero(t)} />
            </View>

            <TouchableOpacity style={[styles.buttonArea, { backgroundColor: '#79a5a8', marginBottom: 20 }]} onPress={handleRegisterButton}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
         </ScrollView>

      </SafeAreaView>
   );
};