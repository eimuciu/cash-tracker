import { createContext, useState, useContext, useEffect } from 'react';
import {
  settingsData,
  expenseData,
  incomeData,
  budgetData,
} from '@/utils/types';
import { colorGenerator } from '@/utils/colorGenerator';
import { filterData } from '@/utils/filterData';

const DataContext = createContext({});

interface Props {
  children: any;
}

// BUDGET FILTER CONSTRUCTION
type TBudget = { budget: number; category: string };
interface IBudget {
  [key: string]: TBudget[];
}

function filterBudgetData(data: IBudget): TBudget[] {
  return data['2024-06'];
}

export function DataContextProvider({ children }: Props) {
  const [settings, setSettings] = useState(settingsData);
  const [expenseList, setExpenseList] = useState(expenseData);
  const [incomeList, setIncomeList] = useState(incomeData);
  const [budget, setBudget] = useState(budgetData);
  const [filter, setFilter] = useState({ case: 'THIS_MONTH', options: {} });

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
    // CHECK IF THERE ARE NO CHANGES IN ARRAY DIFFERENCE THEN DO NOTHING IN THIS FUNCTION
    const newCategories = catArr.filter(
      (x) => !settings.expenseCategories.includes(x),
    );

    const removedCategories = settings.expenseCategories.filter(
      (x) => !catArr.includes(x),
    );

    let newState = { ...settings, expenseCategories: catArr };

    if (newCategories.length) {
      const newColors: any = {};
      const newIcons: any = {};

      newCategories.forEach((x: string) => {
        newColors[x] = colorGenerator();
        newIcons[x] = '/icons/default.png';
      });

      newState = {
        ...newState,
        colors: { ...newState.colors, ...newColors },
        expenseIcons: { ...newState.expenseIcons, ...newIcons },
      };
    }

    if (removedCategories.length) {
      const removedColors: any = { ...newState.colors };
      const removedIcons: any = { ...newState.expenseIcons };

      removedCategories.forEach((x) => {
        delete removedColors[x];
        delete removedIcons[x];
      });

      newState = {
        ...newState,
        colors: removedColors,
        expenseIcons: removedIcons,
      };
    }

    setSettings(newState);

    // AWAITING FOR AN API CALL
  };

  const addSourceSettings = (srcArr: string[]) => {
    // CHECK IF THERE ARE NO CHANGES IN ARRAY DIFFERENCE THEN DO NOTHING IN THIS FUNCTION
    const newSources = srcArr.filter((x) => !settings.incomeSource.includes(x));

    const removedSources = settings.incomeSource.filter(
      (x) => !srcArr.includes(x),
    );

    let newState = { ...settings, incomeSource: srcArr };

    if (newSources.length) {
      const newIcons: any = {};

      newSources.forEach((x: string) => {
        newIcons[x] = '/icons/default.png';
      });

      newState = {
        ...newState,
        incomeIcons: { ...newState.incomeIcons, ...newIcons },
      };
    }

    if (removedSources.length) {
      const removedIcons: any = { ...newState.incomeIcons };

      removedSources.forEach((x) => {
        delete removedIcons[x];
      });

      newState = {
        ...newState,
        incomeIcons: removedIcons,
      };
    }

    setSettings(newState);
    // AWAITING FOR AN API CALL
  };

  const addColorSettings = (colObj: { [key: string]: string }) => {
    // DO I NEED TO CHECK IF THERE ARE ANY CHANGES AT ALL BEFORE AMENDING AN OBJECT OF COLORS ???
    setSettings((prev) => ({ ...prev, colors: colObj as any }));
  };

  const addIconSettings = (icnObj: { [key: string]: string }) => {
    // DO I NEED TO CHECK IF THERE ARE ANY CHANGES AT ALL BEFORE AMENDING AN OBJECT OF ICONS ???
    setSettings((prev) => ({ ...prev, expenseIcons: icnObj as any }));
  };

  const addIncomeIconSettings = (icnObj: { [key: string]: string }) => {
    // DO I NEED TO CHECK IF THERE ARE ANY CHANGES AT ALL BEFORE AMENDING AN OBJECT OF ICONS ???
    setSettings((prev) => ({ ...prev, incomeIcons: icnObj as any }));
  };

  const addExpenseItem = (expObj: any) => {
    setExpenseList((prev) => [...prev, expObj]);
  };

  const addIncomeItem = (incObj: any) => {
    setIncomeList((prev) => [...prev, incObj]);
  };

  const addBudgetItem = (budArr: any) => {
    // NEED TO MAKE A DYNAMIC DATE KEY
    setBudget((prev: any) => ({ ...prev, '2024-06': budArr }));
  };

  return (
    <DataContext.Provider
      value={{
        themeColorPalette: settings.theme,
        settings,
        budget: filterBudgetData(budget),
        expenseList: filterData(expenseList, filter.case, filter.options),
        incomeList: filterData(incomeList, filter.case, filter.options),
        setFilter,
        filter,
        addCurrencySettings,
        addCategoriesSettings,
        addSourceSettings,
        addColorSettings,
        addIconSettings,
        addExpenseItem,
        addIncomeItem,
        addBudgetItem,
        addIncomeIconSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
