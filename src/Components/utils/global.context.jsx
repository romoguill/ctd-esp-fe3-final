import { useState } from 'react';
import { createContext } from 'react';

export const initialState = { theme: 'light', data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState.theme);
  const [favs, setFavs] = useState([]);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ContextGlobal.Provider value={{ theme, toggleTheme, favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};
