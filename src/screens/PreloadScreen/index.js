import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';

export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();

   useEffect(() => {
      const checkLogin = async () => {
         let token = await api.getToken();
         if (token) {
            database()
               .ref('/bd/users')
               .orderByChild('token')
               .equalTo(token)
               .once('value')
               .then(snapshot => {
                  if (snapshot.val() == null) {
                     alert('Token invalido!');
                     dispatch({type: 'setToken', payload: { token: '' }});
                     navigation.reset({
                        index: 1,
                        routes: [{ name: 'LoginScreen' }]
                     });
                  } else {
                     let userData = Object.values(snapshot.val())[0];
                     dispatch({type: 'setUser', payload: {user:userData}});
                     navigation.reset({
                        index: 1,
                        routes: [{ name: 'MainStack' }]
                     });
                  }

               });
         } else {
            navigation.reset({
               index: 1,
               routes: [{ name: 'LoginScreen' }]
            });
         }
      }

      checkLogin();

   }, []);

   
   return (
      <C.Container>
         <C.LoadingIcon color="#dabe7b" size="large" />
      </C.Container>
   );
};