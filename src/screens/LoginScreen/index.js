import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView, Image, TextInput, Text, View, TouchableOpacity } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Background from '../../components/background';
import { styles } from '../../styles';

import { useStateValue } from '../../contexts/StateContext';


export default function Login() {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const ref_passwordInput = useRef();

   

   const loginUser = async () => {


      if (email && password) {
         database()
            .ref('/bd/users')
            .orderByChild('email')
            .equalTo(email)
            .once('value')
            .then(snapshot => {
               if (snapshot.val() == null) {
                  SimpleToast.show('Email inválido!');
                  return false;
               }
               let userData = Object.values(snapshot.val())[0];
               if (userData?.password != password) {
                  SimpleToast.show('Senha incorreta!');
                  return false;
               }
               
               dispatch({ type: 'setToken', payload: { token: userData.token } });
               dispatch({ type: 'setUser', payload: { user: userData } });

               SimpleToast.show('Login feito com sucesso!!');
               
               navigation.reset({
                  index: 1,
                  routes: [{ name: 'MainStack' }]
               });
               
            });
         
      } else {
         SimpleToast.show('Preencha todos os campos!');

      };
   };


   useEffect(() => {

   }, []);

   return (

      <SafeAreaView style={{ flex: 1 }}>
         <Background />
         <KeyboardAwareScrollView >
            <Image style={styles.largeLogo} source={require('../../assets/logo_diocese.png')} />

            <TextInput
               placeholder='Digite seu email'
               style={styles.input}
               autoCapitalize='none'
               returnKeyType={'next'}
               onSubmitEditing={() => ref_passwordInput.current.focus()}
               blurOnSubmit={false}
               keyboardType='email-address'
               onChangeText={(text) => setEmail(text)}
               value={email}
            />

            <TextInput
               placeholder='Senha'
               style={styles.input}
               ref={ref_passwordInput}
               secureTextEntry={true}
               onChangeText={(text) => setPassword(text)}
               value={password}
            />


            <TouchableOpacity
               onPress={loginUser}
               style={styles.buttonArea}
            >
               <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>


         </KeyboardAwareScrollView>
         <View style={styles.copyArea}>
            <Text style={styles.copyright}>Powered by 3DevSystems</Text>
         </View>
      </SafeAreaView>



   );
};



