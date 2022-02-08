import AsyncStorage from '@react-native-async-storage/async-storage'


const initialState = {
   object: {}
}

export default (state = initialState, action = {}) => {
   switch (action.type) {
      case 'setObject':
         return { ...state, object: action.payload.object };
         break;
   }

   return state;
};