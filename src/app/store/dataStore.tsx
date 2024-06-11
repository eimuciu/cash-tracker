import { createContext, useState, useContext } from 'react';
import {
  settingsData,
  expenseData,
  incomeData,
  budgetData,
} from '@/utils/types';
import { colorGenerator } from '@/utils/colorGenerator';

const DataContext = createContext({});

interface Props {
  children: any;
}

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
    setSettings((prev) => ({
      ...prev,
      currency: activeCurrency,
      currenciesList,
    }));
    // AWAITING FOR AN API CALL
  };

  const addCategoriesSettings = (catArr: string[]) => {
    const newCategories = catArr.filter(
      (x) => !settings.expenseCategories.includes(x),
    );
    if (newCategories.length) {
      const newColors: any = {};
      const newIcons: any = {};

      newCategories.forEach((x: string) => {
        newColors[x] = colorGenerator();
        newIcons[x] = '/icons/default.png';
      });

      setSettings((prev) => ({
        ...prev,
        expenseCategories: catArr,
        colors: { ...prev.colors, ...newColors },
        expenseIcons: { ...prev.expenseIcons, ...newIcons },
      }));
    }

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
        addCategoriesSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
