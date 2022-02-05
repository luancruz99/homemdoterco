import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
   //View______________________________
   container: {
      flex: 1,
   },
   
   copyArea: {
      flex: 1,
      flexDirection: "column-reverse",
   },

   buttonArea: {
      backgroundColor: '#dabe7b',
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 40,
      height: 45,
      width: 100,
      marginTop: 20,
      marginBottom: 20,
   },
   
   headerArea: {
      flexDirection: "row",
      height: 190,
   },

   welcomeArea: {
      width: 220,
      height: 58,
      backgroundColor: '#fff',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      top: '14%'
   },

   menuArea: {
      flex: 1,
      width: '92%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },

   menuSubArea: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 15,
      paddingBottom: 15,
      justifyContent: 'space-evenly',
   },

   iconsBorder: {
      width: 154,
      height: 154,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
   },

   menuIcons: {
      flex: 1,
      backgroundColor: '#fff',
      width: '97%',
      maxHeight: '97%',
      alignItems: 'center',
      borderRadius: 10,

   },

   searchArea: {
      flex: 1,
      width: '92%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 10,
   },

   registerArea: {
      flex: 1,
      width: '92%',
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignSelf: 'center',
   },

   imagePickerButton: {
      width: 150,
      height: 150,
      borderRadius: 75,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 10,
 
   },
   
   RegisterArea:{
      flexDirection: 'row',
      justifyContent: "center",
      width: '100%'
   },

   searchResultArea: {
      height: 100,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 15,
   },

   resultImageArea:{
      width: 100,
      height: 100,
      borderRadius: 50,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
   },

   
   resultTextArea:{
      height: '100%',
      flex: 1,
      borderLeftWidth: 0.55,
      justifyContent: 'center',
      borderLeftColor: '#0000002f',
   },
   
   
   resultSeparator:{
      width: '80%',
      borderWidth: 0.6,
      alignSelf: 'center',
      borderColor: '#0000002f',
   },
   
   //Image_______________________________
   largeLogo: {
      width: 250,
      height: 250,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 60,
     marginBottom: 40,
     
   },

   smallLogo: {
      width: 135,
      height: 135,
      alignSelf: 'center',
      left: '15%',
   },
   
   iconLogo: {
      margin: 12,
      width: 102,
      height: 102,
   },
   
   imagePicker: {
      height: 150,
      width: 150,
      borderRadius: 75,
      alignSelf: 'center',
   },
   
   resultImage:{
      width: '80%',
      height: '80%',
   },
   //Input_______________________________
   input: {
      height: 45,
      width: '92%',
      backgroundColor: '#FFF',
      textAlign: 'center',
      borderRadius: 40,
      marginBottom: 7,
      alignSelf: 'center',
      fontSize: 16,
   },

   halfRegister: {
      width: '42%',
      borderBottomColor: '#696969',
      borderBottomWidth: 0.4,
      marginLeft:10,
      marginRight: 10,
   },

   nameRegister: {
      width: '90%',
      borderBottomColor: '#696969',
      borderBottomWidth: 0.4,
      alignSelf: 'center',
   },

   adressRegister: {
      width: '64%',
      borderBottomColor: '#696969',
      borderBottomWidth: 0.4,
      marginRight: 10,
   },

   numberRegister: {
      width: '20%',
      borderBottomColor: '#696969',
      borderBottomWidth: 0.4,
      marginLeft: 10,
   },

   
   //Text________________________________
   copyright: {
      color: '#888',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      top: 10,
   },

   buttonText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
   },

   welcomeText: {
      color: '#b69b4f',
      fontSize: 22,
      fontWeight: 'bold',
   },

   iconText: {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 15,
      
      
   },

   imagePickerText: {
      fontSize: 12,
      color: '#fff',
      
   },
   
   restultText:{
      fontSize: 20,
      color: '#313131',
      paddingLeft: 5,
   },

   resultSubText: {
      fontSize: 13,
      color: '#313131',
      paddingLeft: 5,
   },
   
 
 });

 export {styles};