import React, { createContext, useContext, useReducer } from 'react';

import UserReducer from '../reducers/UserReducer';
import ObjectReducer from '../reducers/ObjectReducer';

const initialState = {
   data: UserReducer(),
};

const MainReducer = (state, action) => ({
   data: UserReducer(state.data, action),
   objectData: ObjectReducer(state.data, action),
});

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
   const [state, dispatch] = useReducer(MainReducer, initialState);
   
   return(
      <StateContext.Provider value={[state, dispatch]}>
         {children}
      </StateContext.Provider>
   );
};

export const useStateValue = () => useContext(StateContext);