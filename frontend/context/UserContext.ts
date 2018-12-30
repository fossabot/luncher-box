import { Category } from '../interfaces';
import React from 'react';

interface Values {
  categories: Category[];
}

export const UserContext = React.createContext<Values>({
  categories: []
});