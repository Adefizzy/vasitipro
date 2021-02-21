import {useContext, createContext} from 'react';

export const DataContext = createContext([]);

export const UseDataContext = () => useContext(DataContext);