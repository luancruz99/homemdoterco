import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import uuid from 'react-native-uuid';

import {
   ScrollView,
   SafeAreaView,
   View,
   Text,
   Image,
   TouchableOpacity,
   TextInput,
   ActivityIndicator

} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import Background from '../../components/background';
import { styles } from '../../styles';



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
   const [loading, setLoading] = useState(false);

   const handleRegisterButton = async () => {

      if (loading) {
         SimpleToast.show('Processando o cadastro!');
         return;
      }

      if (!avatar) {
         SimpleToast.show('Defina uma foto!');
         return;
      }

      if (name == '' || cep == '' || estado == '' || cidade == '' || bairro == '' || endereco == '' || numero == '') {
         SimpleToast.show('Preencha todos os campos!');
         return;
      }

      setLoading(true);

      let token = uuid.v4();
      let databaseRef = database().ref(`/bd/diocese/${token}`);
      let storageRef = storage().ref(`images/diocese/${token}`);

      await storageRef.putFile(avatar.uri);
      let imageUrl = await storageRef.getDownloadURL();
      let type = 'diocese';

      await databaseRef.set({
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

      setLoading(false);

      SimpleToast.show('Cadastro concluído!');
      resetField();
      navigation.navigate('DioceseTabSearch');


   };

   const getPhoto = () => {
      let options = {
         mediaType: 'photo',
         maxWidth: 1280,
         maxHeight: 1280,
      };

      launchImageLibrary(options, (data) => {
         if (data.didCancel) {
            return;
         }
         if (data.errorCode) {
            return;
         }
         if (!data.assets[0].uri) {
            return;
         }

         setAvatar(data.assets[0]);

      })

   };

   const resetField = () => {
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

         {loading ? <ActivityIndicator style={styles.loadingIndicator} color="#dabe7b" size="large" /> : null}

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


            <TextInput style={styles.nameRegister} value={name} autoCapitalize='words' placeholder='Nome' onChangeText={(t) => setName(t)} />

            <View style={styles.RegisterArea}>
               <TextInput style={styles.halfRegister} value={cep} maxLength={8} keyboardType='number-pad' placeholder='CEP' onChangeText={(t) => setCep(t)} />
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