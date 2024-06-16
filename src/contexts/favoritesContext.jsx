/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// SavedContext.js
import { createContext, useContext, useReducer, useEffect,  } from 'react';

// Reducer function to handle state changes
const savedReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_SAVED':
            const updatedSaved = [...state.savedItems, action.payload];
            localStorage.setItem('savedItems', JSON.stringify(updatedSaved));
            return {
                ...state,
                savedItems: updatedSaved,
            };
        case 'SET_SAVED_ITEMS':
            return {
                ...state,
                savedItems: action.payload,
            };
        case 'REMOVE_FROM_SAVED':
            const filteredSaved = state.savedItems.filter(
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem('savedItems', JSON.stringify(filteredSaved));
            return {
                ...state,
                savedItems: filteredSaved,
            };
        case 'CLEAR_SAVED':
            localStorage.removeItem('savedItems');
            return {
                ...state,
                savedItems: [],
            };
        default:
        return state;
    }
};

// Create context
const SavedContext = createContext();

// Custom hook to access the context
const useSaved = () => {
    const context = useContext(SavedContext);
    if (!context) {
        throw new Error('useSaved must be used within a SavedProvider');
    }
    return context;
};

// SavedProvider component to wrap your app and provide the context
const SavedProvider = ({ children }) => {
    const [state, dispatch] = useReducer(savedReducer, { savedItems: [] });

    useEffect(() => {
      // Load Saved items from localStorage on component mount
      const savedsavedItems = localStorage.getItem('savedItems');
    //   console.log('Saved Saved Items:', savedsavedItems);
      if (savedsavedItems) {
        dispatch({
          type: 'SET_SAVED_ITEMS',
          payload: JSON.parse(savedsavedItems),
        });
      }
    }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <SavedContext.Provider value={{ state, dispatch }}>
      {children}
    </SavedContext.Provider>
  );
};

export { SavedProvider, useSaved };
