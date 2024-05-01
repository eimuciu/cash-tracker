import { createContext, useState, useContext, useEffect } from 'react';
import { useDataContext } from './dataStore';

// secondColor: '#E5DCE1',
// activeColor: '#3B413C',

// const colorPalette = {
//   activeColor: '#880D1E',
//   firstColor: '#D8D4F2',
//   secondColor: '#D1AC00',
//   thirdColor: '#C6E0FF',
//   fourthColor: '#91F5AD',
//   greyedColor: '#F5F5F5',
// };

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }: { children: any }) {
  const [themeColorsList, setThemeColorsList] = useState(null);

  const { themeColorPalette }: any = useDataContext();

  useEffect(() => {
    setThemeColorsList(themeColorPalette);
  }, [themeColorPalette]);

  return (
    <ThemeContext.Provider
      value={{ themeColorsList, changeThemeColor: setThemeColorsList }}
    >
      {children(themeColorsList)}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
