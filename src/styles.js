import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
   largeLogo: {
     width: 250,
     height: 250,
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 60,
     marginBottom: 40,
     
   },

   input: {
      height: 45,
      width: '95%',
      backgroundColor: '#FFF',
      textAlign: 'center',
      borderRadius: 40,
      marginBottom: 7,
      alignSelf: 'center',
      fontSize: 16,
   },

   copyArea: {
      flex: 1,
      flexDirection: "column-reverse",
   },

   copyright: {
      color: '#888',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      top: 10,
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

   buttonText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
   }
 
 });

 export {styles};