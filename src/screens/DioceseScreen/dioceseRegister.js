import React, { useState } from 'react';
import {
   ScrollView,
   SafeAreaView,
   View,
   Text,
   Image,
   TouchableOpacity,
   TextInput,
   ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

import SimpleToast from 'react-native-simple-toast';
import uuid from 'react-native-uuid';
import * as yup from 'yup';

import Background from '../../components/background';
import states from '../../components/States';
import { styles } from '../../styles';



export default () => {
   const navigation = useNavigation();
   const [avatar, setAvatar] = useState('');

   const [name, setName] = useState('');
   const [cep, setCep] = useState('');
   const [state, setState] = useState('');
   const [city, setCity] = useState('');
   const [district, setDistrict] = useState('');
   const [adress, setAdress] = useState('');
   const [number, setNumber] = useState('');
   const [select, setSelect] = useState(false);
   const [complement, setComplement] = useState('');
   const [biography, setBiography] = useState('');

   const [loading, setLoading] = useState(false);
   
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
      setState('');
      setCity('');
      setDistrict('');
      setAdress('');
      setNumber('');
      setComplement('');
      setBiography('');
   };

   const handleRegisterButton = async () => {      
      if (loading) {
         SimpleToast.show('Processando o cadastro!');
         return;
      }

      try {
         const schema = yup.object().shape({
            number: yup
               .string()
               .matches(/^[0-9]+$/gi, 'Digite o número')
               .required('Digite o número'),
            adress: yup
               .string()
               .required('Defina o endereço'),
            district: yup
               .string()
               .required('Defina o bairro'),
            city: yup
               .string()
               .required('Defina a cidade'),
            state: yup
               .string()
               .required('Escolha um estado'),
            cep: yup
               .string()
               .matches(/^[0-9]+$/gi, 'Digite um CEP válido')
               .min(8, 'Digite um CEP válido')
               .required('Digite um CEP válido'),
            name: yup
               .string()
               .required('Digite o nome')
               .min(5, 'Digite o nome completo'),

         })

         await schema.validate({ name, cep, state, city, district, adress, number })
         setLoading(true);

         let token = uuid.v4();
         let imageUrl = 'https://leituria.com/Content/Images/img-default.png'
         let type = 'diocese';

         let databaseRef = database().ref(`/bd/diocese/${token}`);


         if (avatar) {
            let storageRef = storage().ref(`images/diocese/${token}`);
            await storageRef.putFile(avatar.uri);
            imageUrl = await storageRef.getDownloadURL();

         }

         await databaseRef.set({
            token,
            name,
            cep,
            state,
            city,
            district,
            adress,
            number,
            complement,
            type,
            imageUrl,
            biography,
         });

         setLoading(false);

         SimpleToast.show('Cadastro concluído!');
         resetField();
         navigation.navigate('DioceseTabSearch');
      } catch (error) {
         if (error instanceof yup.ValidationError) {
            SimpleToast.show(error.message);
         }
      }


   };
   return (
      <SafeAreaView style={styles.container}>
         <Background />

         {loading && <ActivityIndicator style={styles.loadingIndicator} color="#dabe7b" size="large" />}

         <View style={styles.headerArea}>
            <View style={styles.welcomeArea}>
               <Text style={styles.welcomeText}>Diocese</Text>
            </View>

            <Image style={styles.smallLogo} source={require('../../assets/logo_diocese.png')} />
         </View>


         <ScrollView style={styles.registerArea}>

            <TouchableOpacity style={styles.imagePickerButton} onPress={getPhoto}>
               <Image
                  style={styles.imagePicker}
                  source={{
                     uri
                        : avatar
                           ? avatar.uri : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'


                  }}
               />
            </TouchableOpacity>


            <TextInput
               style={styles.fullRegister}
               placeholder='Nome'
               autoCapitalize='words'
               value={name}
               onChangeText={(t) => setName(t)}
            />

            <View style={styles.registerSubArea}>
               <TextInput
                  style={styles.halfRegister}
                  keyboardType='number-pad'
                  maxLength={8}
                  placeholder='CEP'
                  value={cep}
                  onChangeText={(t) => setCep(t)}
               />
               <View style={styles.halfRegister}>
                  <Picker
                     style={styles.picker}
                     selectedValue={state}
                     onValueChange={(t) => setState(t)}
                  >
                     <Picker.Item
                        value={''}
                        label={'Estado'}
                        color={'#999'}
                        enabled={false}
                     />
                     {
                        states.map((item, index) => {
                           return <Picker.Item
                              value={item}
                              label={item}
                              key={index}
                              color={'#000'}
                           />
                        })
                     }
                  </Picker>

               </View>
            </View>
            <View style={styles.registerSubArea}>
               <TextInput
                  style={styles.halfRegister}
                  placeholder='Cidade'
                  value={city}
                  onChangeText={(t) => setCity(t)}
               />
               <TextInput
                  style={styles.halfRegister}
                  placeholder='Bairro'
                  value={district}
                  onChangeText={(t) => setDistrict(t)}
               />
            </View>
            <View style={styles.registerSubArea}>
               <TextInput
                  style={styles.adressRegister}
                  placeholder='Endereço'
                  value={adress}
                  onChangeText={(t) => setAdress(t)}
               />
                  
               <View style={[{flexDirection: 'row', width: '30%', paddingRight: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }]} >
                  <TextInput
                     style={styles.numberRegister}
                     keyboardType='number-pad'
                     placeholder='Nº'
                     value={number}
                     onChangeText={(t) => setNumber(t)}
                  />
                  <BouncyCheckbox 
                     isChecked={select}
                     onPress={() => setSelect(!select)}
                     size={20}
                     fillColor="#79a5a8"
                     unfillColor="#FFFFFF"
                     text="S/N"
                     iconStyle={{ borderColor: "#79a5a8", margin: -10}}
                     textStyle={{ textDecorationLine: "none", fontSize: 13 }}
        		      />
               </View>
            </View>

            <TextInput
               style={styles.fullRegister}
               placeholder='Complemento'
               value={complement}
               onChangeText={(t) => setComplement(t)}
            />

            <TextInput
               style={styles.fullRegister}
               placeholder='Biografia'
               multiline={true}
               value={biography}
               onChangeText={(t) => setBiography(t)}
            />

            <TouchableOpacity style={[styles.buttonArea, { backgroundColor: '#79a5a8', marginBottom: 20 }]} onPress={handleRegisterButton}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
         </ScrollView>

      </SafeAreaView >
   );
};