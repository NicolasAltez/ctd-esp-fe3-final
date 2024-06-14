import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import axios from 'axios';
import { reducer, initialState } from '../../reducers/reducer';

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: 'SET_DENTISTS', payload: res.data });
      })
      .catch(err => console.log(err));
  }, []);

  const value = useMemo(() => ({
    state,
    dispatch,
    toggleTheme: () => {
      dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
    },
  }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
