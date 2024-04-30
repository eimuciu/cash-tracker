import { createContext, useState, useContext, useEffect } from 'react';
import { useThemeContext } from './themeStore';

const DataContext = createContext({});

interface Props {
  children: any;
}

const colorPalette = {
  activeColor: '#880D1E',
  firstColor: '#D8D4F2',
  secondColor: '#D1AC00',
  thirdColor: '#C6E0FF',
  fourthColor: '#91F5AD',
  greyedColor: '#F5F5F5',
};

export function DataContextProvider({ children }: Props) {
  const [dataList, setDataList] = useState([1, 2, 3, 4, 5]);

  return (
    <DataContext.Provider value={{ dataList, setDataList, colorPalette }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
