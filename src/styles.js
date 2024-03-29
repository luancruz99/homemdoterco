import { normalizeUnits } from "moment";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
   //View______________________________
   container: {
      flex: 1,
      backgroundColor: '#fff'
   },
   container2: {
      height: '100%',
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

   registerButtonArea: {
      backgroundColor: '#79a5a8',
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
      height: 200,
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
      height: '100%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10
      
   },

   menuSubArea: {
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
      width: '95%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 10,
   },


   registerArea: {
      flex: 1,
      width: '95%',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignSelf: 'center',
   },

   imagePickerButton: {
      width: 150,
      height: 150,
      borderRadius: 75,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 5,

   },

   registerSubArea: {
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

   resultImageArea: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
   },


   resultTextArea: {
      height: '100%',
      flex: 1,
      borderLeftWidth: 0.55,
      justifyContent: 'center',
      borderLeftColor: '#0000002f',
   },


   resultSeparator: {
      width: '80%',
      borderTopWidth: 0.55,
      alignSelf: 'center',
      borderColor: '#0000002f',
   },

   infoArea: {
      width: '95%',
      height: '100%',
      backgroundColor: '#fff',
      alignSelf: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      top: 200,
      borderWidth: 1,
      borderColor: '#00000008',

   },

   infoObjectArea: {
      height: 150,
      width: '100%',
   },

   headerUserArea: {
      height: 200,
      flexDirection: 'row',
      alignItems: 'center',
   },

   absoluteView: {
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
   },

   registerButton: { 
      position: 'absolute', 
      width: 50, 
      height: 50, 
      borderRadius: 25, 
      bottom: 25, 
      right: 35, 
      backgroundColor: '#dabe7b', 
      alignItems: 'center', 
      justifyContent: 'center' 
   },

   editButton: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: 25,
      maxheigh: 25, 
      minheigh: 25, 
      width: 25, 
      maxwidth: 25, 
      minwidth: 25, 
      right:20, 
      top:20,
      borderRadius: 4,
      backgroundColor: '#0000005f'
   },

   numberRegisterArea: {
      width: '25%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginLeft: 10,
      flexDirection:'row', 
      alignItems: 'center'
   },

   registerAreaEvent: {
      width: '95%',
      backgroundColor: '#fff',
      justifyContent:'center'   
   },

   registerSubAreaEvent: {
      flexDirection: 'row',
      justifyContent: "center",
      width: '95%'
   },

   searchAreaEvent: {
      flex: 1,
      width: '95%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingLeft:15,
      paddingRight: 15
   },

   searchResultAreaEvent: {
      width: '95%',
      marginTop: 10,
      marginBottom:5,
      borderWidth:0.55,
      borderRadius:20,
      borderColor: '#0000005f',
      alignSelf: 'center',
   },

   resultImageAreaEvent:{
      width: '100%',
      height: 100,
      borderTopLeftRadius: 15,
      borderTopRightRadius:15,
   },

   resultTextAreaEvent: {
      height: 60,
      widht: '100%'
   },

   //Image_______________________________
   largeLogo: {
      width: 250,
      height: 250,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 60,
      marginBottom: 80,

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

   resultImage: {
      width: '100%',
      height: '100%',
      borderRadius: 75,
   },

   infoImage: {
      width: '100%',
      height: 300,
   },

   objectSmallLogo: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginLeft: 10,
      marginRight: 10,
   },

   resultImageEvent: {
      width: '100%',
      height: 100,
      borderTopLeftRadius: 15,
      borderTopRightRadius:15,
   },

   //Input_______________________________
   
   input: {
      height: 45,
      width: '95%',
      backgroundColor: '#FFF',
      textAlign: 'center',
      borderRadius: 40,
      marginBottom: 7,
      alignSelf: 'center',
      alignItems: 'center',
      fontSize: 16,
   },

   halfRegister: {
      width: '42%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginLeft: 10,
      marginRight: 10,
      fontSize: 16,
      justifyContent: 'center',
   },

   fullRegister: {
      width: '89%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      alignSelf: 'center',
      fontSize: 16,
   },

   adressRegister: {
      width: '59%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginRight: 10,
      fontSize: 16,
   },

   numberRegisterInput:{
      width: '45%',
      fontSize: 16,
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

   restultText: {
      fontSize: 20,
      color: '#313131',
      paddingLeft: 5,
   },

   resultSubText: {
      fontSize: 13,
      color: '#313131',
      paddingLeft: 5,
   },
   infoObjectName: {
      fontSize: 35,
      color: '#595959',
      marginHorizontal: 20,
      marginVertical: 30,
   },

   generalInfoObject: {
      fontSize: 20,
      marginHorizontal: 20,
      marginVertical: 5,
      color: '#595959',
   },

   noNumberText: {
      fontSize: 14,
   },

   resultTextEvent: {
      fontSize: 25,
      color: '#000',
      paddingHorizontal: 10,
   },

   resultSubTextEvent: {
      fontSize: 15,
      color: '#000',
      paddingHorizontal: 10,
   },

   datePickerText: {
      fontSize: 16,
      color: '#888',
      paddingHorizontal: 5,
      position:'absolute'
   },

   //ActivityIndicator___________________
   loadingIndicator: {
      position: 'absolute',
      alignSelf: 'center',
      marginTop: 135,
      backgroundColor: '#fff',
      borderRadius: 50,
      padding: 2,
   },

   //Picker______________________________
   
   picker: {
      marginLeft: -12,
      marginBottom: -3,
   },

   //LinearGradient______________________
   absoluteLinearGradient: { 
      position: 'absolute', 
      height: 300, 
      width: '100%' ,
   },
   //BouncyCheckBox______________________
   noNumberCheckBox: {
      marginRight:'-14%',
   },
});

export { styles };