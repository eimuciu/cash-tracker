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
  const [settings, setSettings] = useState(settingsData);
  const [expenseList, setExpenseList] = useState(expenseData);
  const [incomeList, setIncomeList] = useState(incomeData);
  const [periodSelection, setPeriodSelection] = useState('Current month');

  return (
    <DataContext.Provider
      value={{
        themeColorPalette: settings.theme,
        settings,
        expenseList,
        incomeList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
