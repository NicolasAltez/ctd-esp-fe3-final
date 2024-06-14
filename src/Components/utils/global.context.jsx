import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import { fetchDentists } from '../../services/api';
import { reducer, initialState } from '../../reducers/reducer';

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getDentists = async () => {
      try {
        const data = await fetchDentists();
        dispatch({ type: 'SET_DENTISTS', payload: data });
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    getDentists();
  }, []);

  const value = useMemo(() => ({
    state,
    dispatch,
    toggleTheme: () => {
      dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
    },
    addFavorite: (dentist) =>{
      const updatedFavorites = [...state.favorites, dentist];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch({ type: 'SET_FAVORITES', payload: updatedFavorites });
    },
    removeFavorite: (id) => {
      const updatedFavorites = state.favorites.filter(dentist => dentist.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch({ type: 'SET_FAVORITES', payload: updatedFavorites });
    },
    loadFavorites: () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      dispatch({ type: 'SET_FAVORITES', payload: favorites });
    }
  }), [state]);

  useEffect(() => {
    value.loadFavorites();
  }, []);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
