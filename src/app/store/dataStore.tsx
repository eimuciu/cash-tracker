import { createContext, useState, useContext } from 'react';
import { settingsData, expenseData, incomeData } from '@/utils/types';

const DataContext = createContext({});

interface Props {
  children: any;
}

// const colorPalette = {
//   activeColor: '#880D1E',
//   firstColor: '#D8D4F2',
//   secondColor: '#D1AC00',
//   thirdColor: '#C6E0FF',
//   fourthColor: '#91F5AD',
//   greyedColor: '#F5F5F5',
// };

export function DataContextProvider({ children }: Props) {

  return (
    <DataContext.Provider
      value={{
        themeColorPalette: settingsData.theme,
        settingsData,
        expenseData,
        incomeData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
