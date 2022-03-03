import React, { useState, useRef } from 'react';
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
import { useStateValue } from '../../../contexts/StateContext';

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SimpleToast from 'react-native-simple-toast';
import uuid from 'react-native-uuid';
import * as yup from 'yup';

import Background from '../../../components/background';
import { styles } from '../../../styles';
import states from '../../../components/States'
import functions from '../../../components/functions';


export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue('');

   const [avatar, setAvatar] = useState('');
   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [cep, setCep] = useState('');
   const [state, setState] = useState('');
   const [city, setCity] = useState('');
   const [district, setDistrict] = useState('');
   const [adress, setAdress] = useState('');
   const [number, setNumber] = useState('');
   const [complement, setComplement] = useState('');
   const [occupation, setOccupation] = useState('');

   const [loading, setLoading] = useState(false);
   const [noNumber, setNoNumber] = useState(false);

   const ref_passwordInput = useRef();

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
      setLastName('');
      setEmail('');
      setPassword('');
      setOccupation('');
      setNoNumber(false);
   };

   const handleNoNumber = (t) => {
      setNoNumber(t);
      if(t){
         setNumber('S/N');
      } else {
         setNumber('');
      }
   };

   const handleRegisterButton = async () => {

      if (loading) {
         SimpleToast.show('Processando o cadastro!');
         return;
      }

      try {
         const schema = yup.object().shape({
            number: yup.string().required('Digite o número'),
            adress: yup.string().required('Defina o endereço'),
            district: yup.string().required('Defina o bairro'),
            city: yup.string().required('Defina a cidade'),
            state: yup.string().required('Escolha um estado'),
            cep: yup.string().required('Digite um CEP').min(8, 'Digite um CEP válido'),
            occupation: yup.string().required('Selecione um cargo'),
            password: yup.string().required('Digite uma senha').min(8, 'A senha precisa ter 8 caracteres'),
            email: yup.string().email('Digite um email válido').required('Digite o email'),
            lastName: yup.string().required('Digite o sobrenome'),
            name: yup.string().required('Digite o nome'),
         })

         await schema.validate({ name, lastName, cep, state, city, district, adress, number, email, password, occupation })
         setLoading(true);

         let token = uuid.v4();
         let imageUrl = 'https://leituria.com/Content/Images/img-default.png'
         let belongsTo = context.objectData.diocese.token;
         let databaseRef = database().ref(`/bd/users/${token}`);


         if (avatar) {
            let storageRef = storage().ref(`images/users/${token}`);
            await storageRef.putFile(avatar.uri);
            imageUrl = await storageRef.getDownloadURL();

         }

         await databaseRef.set({
            adress,
            belongsTo,
            cep,
            city,
            complement,
            district,
            email,
            imageUrl,
            lastName,
            name,
            number,
            occupation,
            password,
            state,
            token,
         });

         setLoading(false);

         SimpleToast.show('Cadastro concluído!');
         resetField();
         navigation.navigate('DioceseUser');
      } catch (error) {
         if (error instanceof yup.ValidationError) {
            SimpleToast.show(error.message);
         }

         setLoading(false);
      }
   };

   return (
      <SafeAreaView style={styles.container}>
         <Background />

         {loading && <ActivityIndicator style={styles.loadingIndicator} color="#dabe7b" size="large" />}

         <View style={styles.headerArea}>
            <View style={styles.welcomeArea}>
               <Text style={styles.welcomeText}>Membro</Text>
            </View>

            <Image style={styles.smallLogo} source={require('../../../assets/logo_diocese.png')} />
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
            <TextInput
               style={styles.fullRegister}
               placeholder='Sobrenome'
               autoCapitalize='words'
               value={lastName}
               onChangeText={(t) => setLastName(t)}
            />
            <TextInput
               style={styles.fullRegister}
               keyboardType='email-address'
               placeholder='Email'
               autoCapitalize='none'
               value={email}
               onChangeText={(t) => setEmail(t)}
            />
            <TextInput
               placeholder='Senha'
               style={styles.fullRegister}
               ref={ref_passwordInput}
               secureTextEntry={true}
               onChangeText={(text) => setPassword(text)}
               value={password}
            />
            <View style={styles.fullRegister}>
                  <Picker
                     style={styles.picker}
                     selectedValue={occupation}
                     onValueChange={(t) => setOccupation(t)}
                  >
                     <Picker.Item
                        value={''}
                        label={'Cargo'}
                        color={'#999'}
                        enabled={false}
                     />
                     {
                        functions.map((item, index) => {
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

            <View style={styles.registerSubArea}>
            <TextInput
                  style={styles.halfRegister}
                  keyboardType='number-pad'
                  maxLength={8}
                  placeholder='CEP'
                  value={cep}
                  onChangeText={(t) => setCep(t.replace(/[^0-9]/g, ''))}
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
               <View style={styles.numberRegisterArea}>
                  <TextInput
                     style={styles.numberRegisterInput}
                     keyboardType='number-pad'
                     placeholder='Nº'
                     value={number}
                     onChangeText={(t) => setNumber(t.replace(/[^0-9]/g, ''))}
                     editable={noNumber?false:true}
                  />

                  <BouncyCheckbox
                     size={20}
                     fillColor='#b69b4f'
                     unfillColor='#FFFFFF'
                     onPress={(t)=>handleNoNumber(t)}
                     style={styles.noNumberCheckBox}
                  />
                  <Text style={styles.noNumberText}>S/N</Text>
               </View>
            </View>


            <TextInput
               style={styles.fullRegister}
               placeholder='Complemento'
               value={complement}
               onChangeText={(t) => setComplement(t)}
            />

            <TouchableOpacity style={styles.registerButtonArea} onPress={handleRegisterButton}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

         </ScrollView>

      </SafeAreaView >
   );
};