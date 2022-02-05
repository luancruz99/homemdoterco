import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';
import LinearGradient from 'react-native-linear-gradient';
import {
ScrollView,
SafeAreaView,
View,
Text,
Image,
TouchableOpacity,

}
   from 'react-native'

import api from '../../services/api';

import Background from '../../components/background';
import { styles } from '../../styles';

export default () => {
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();

   

   const redirectConsultaParoquia = () => { };

   const redirectConsultaCapela = () => { };

   const redirectConsultaMembro = () => { };

   const handleEstatisticsButton = () => { };

   const handleExitButton = async () => {
      await api.logout();
      navigation.reset({
         index: 1,
         routes: [{ name: 'LoginScreen' }],
      });
   };

   return (
      <SafeAreaView style={styles.container}>
         <Background />

         <ScrollView >
            <View style={styles.headerArea}>
               <View style={styles.welcomeArea}>
                  <Text style={styles.welcomeText}>Olá {context.userData.user.name}!</Text>
               </View>

               <Image style={styles.smallLogo} source={require('../../assets/logo_diocese.png')} />
            </View>

         
            <View style={styles.menuArea}>
               <View style={styles.menuSubArea}>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={()=>{navigation.navigate('DioceseTab');}}>
                        <Image style={styles.iconLogo} source={require('../../assets/diocese.png')} />
                        <Text style={styles.iconText}>Diocese</Text>
                     </TouchableOpacity>
                  </LinearGradient>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={redirectConsultaParoquia}>
                        <Image style={styles.iconLogo} source={require('../../assets/paroquia.png')} />
                        <Text style={styles.iconText}>Paróquia</Text>
                     </TouchableOpacity>
                  </LinearGradient>

               </View>

               <View style={styles.menuSubArea}>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={redirectConsultaCapela}>
                        <Image style={styles.iconLogo} source={require('../../assets/capela.png')} />
                        <Text style={styles.iconText}>Capela</Text>
                     </TouchableOpacity>
                  </LinearGradient>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={redirectConsultaMembro}>
                        <Image style={styles.iconLogo} source={require('../../assets/membro.png')} />
                        <Text style={styles.iconText}>Membros</Text>
                     </TouchableOpacity>
                  </LinearGradient>

               </View>

               <View style={styles.menuSubArea}>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={handleEstatisticsButton}>
                        <Image style={styles.iconLogo} source={require('../../assets/estatistica.png')} />
                        <Text style={styles.iconText}>Estatísticas</Text>
                     </TouchableOpacity>
                  </LinearGradient>

                  <LinearGradient
                     colors={['#f1da9a', '#b69b4f']}
                     style={styles.iconsBorder}
                  >
                     <TouchableOpacity activeOpacity={0.75} style={styles.menuIcons} onPress={handleExitButton}>
                        <Image style={styles.iconLogo} source={require('../../assets/logout.png')} />
                        <Text style={styles.iconText}>Sair</Text>
                     </TouchableOpacity>
                  </LinearGradient>

               </View>

            </View>
         </ScrollView>

      </SafeAreaView>
   );
};