import { createContext, useState, useContext } from 'react';
import {
  settingsData,
  expenseData,
  incomeData,
  budgetData,
} from '@/utils/types';

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
  const [budget, setBudget] = useState(budgetData);
  // const [activePeriodFilter, setPeriodSelection] = useState('Current month');

  const addCurrencySettings = (
    activeCurrency: string,
    currenciesList: string[],
  ) => {
    console.log('activeCurrency: ', activeCurrency);
    console.log('currenciesList: ', currenciesList);
    setSettings((prev) => ({
      ...prev,
      currency: activeCurrency,
      currenciesList,
    }));
    // AWAITING FOR AN API CALL
  };

  return (
    <DataContext.Provider
      value={{
        themeColorPalette: settings.theme,
        settings,
        expenseList,
        incomeList,
        addCurrencySettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
