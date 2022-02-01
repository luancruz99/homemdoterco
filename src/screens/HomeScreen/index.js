import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';

import api from '../../services/api';


import { BoasVindasArea, BoasVindasText, SafeView, Logo, MenuArea, MenuIcons, IconsText, IconsImage, MenuArea2, MenuIconsBorder, Scroll } from './style';
import Background from '../../components/background';



export default () =>{
   const navigation = useNavigation();
   const [context, dispatch] = useStateValue();

   const redirectConsultaDiocese = () => {
      navigation.navigate('ConsultaDiocese')
   }

   const redirectConsultaParoquia = () => {
      navigation.navigate('ConsultaParoquia')
   };
   
   const redirectConsultaCapela = () => {
      navigation.navigate('ConsultaCapela')
   };
   
   const redirectConsultaMembro = () => {
      navigation.navigate('ConsultaMembro')
   };

   const handleExitButton = async () => {
      await api.logout();
      navigation.reset({
         index: 1,
         routes:[{name: 'LoginScreen'}],
      });
   };


 return (
   <Scroll>
      <SafeView>
         <Background/>
         <BoasVindasArea>
            <BoasVindasText>Olá {context.user.user.name}!</BoasVindasText>
         </BoasVindasArea>

         <Logo source={require('../../assets/logo_diocese.png')}/>

         <MenuArea>
            <MenuArea2>
               <MenuIconsBorder>
                  <MenuIcons onPress={redirectConsultaDiocese}>
                     <IconsImage source={require('../../assets/diocese.png')}/>
                     <IconsText>Dioceses</IconsText>

                  </MenuIcons>
               </MenuIconsBorder>
               
               <MenuIconsBorder>
                  <MenuIcons onPress={redirectConsultaParoquia}>
                     <IconsImage source={require('../../assets/paroquia.png')}/>
                     <IconsText>Paróquias</IconsText>
                  </MenuIcons>

               </MenuIconsBorder>   

               </MenuArea2>

               <MenuArea2>
                  <MenuIconsBorder>
                     <MenuIcons onPress={redirectConsultaCapela}>
                        <IconsImage source={require('../../assets/capela.png')}/>
                        <IconsText>Capelas</IconsText>

                     </MenuIcons>
                  </MenuIconsBorder>

                  <MenuIconsBorder>
                     <MenuIcons onPress={redirectConsultaMembro}>
                        <IconsImage source={require('../../assets/membro.png')}/>
                        <IconsText>Membros</IconsText>

                     </MenuIcons>
                  </MenuIconsBorder>

               </MenuArea2>

               <MenuArea2>
                  <MenuIconsBorder>
                     <MenuIcons>
                        <IconsImage source={require('../../assets/estatistica.png')}/>
                        <IconsText>Estatísticas</IconsText>

                     </MenuIcons>
                  </MenuIconsBorder>

                  <MenuIconsBorder>
                     <MenuIcons onPress={handleExitButton}>
                        <IconsImage source={require('../../assets/logout.png')}/>
                        <IconsText>Sair</IconsText>

                     </MenuIcons>
                  </MenuIconsBorder>
               </MenuArea2>

         </MenuArea>

              

      </SafeView>

   </Scroll>
   
 );
}