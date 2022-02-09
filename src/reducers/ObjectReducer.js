import AsyncStorage from '@react-native-async-storage/async-storage'


const initialState = {
   diocese: {}
}

export default (state = initialState, action = {}) => {
   switch (action.type) {
      case 'setDiocese':
         return { ...state, diocese: action.payload.diocese };
         break;
   }

   return state;
};