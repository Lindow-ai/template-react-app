import React, { createContext, useReducer } from 'react';

export const DisplayItemsContext = createContext();

const initialState = {
    loading: true,
    data: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_DATA':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export const DisplayItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DisplayItemsContext.Provider value={{state, dispatch}}>
            {children}
        </DisplayItemsContext.Provider>
    );
};