const initialState = {
   diocese: {},
   paroquia: {},
   capela: {},
   event: {},
   user: {},
}

export default (state = initialState, action = {}) => {
   switch (action.type) {
      case 'setDiocese':
         return { ...state, diocese: action.payload.diocese };
         break;
      case 'setParoquia':
         return { ...state, paroquia: action.payload.paroquia };
         break;
      case 'setCapela':
         return { ...state, capela: action.payload.capela };
         break;
      case 'setEvent':
         return { ...state, event: action.payload.event };
         break;
      case 'setObjectUser':
         return { ...state, user: action.payload.user };
         break;
   }

   return state;
};