'use client';

import React, { useState } from 'react';
import ListElement from './listElement';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';

// AWAITING DATA START

const settingsData = {
  currency: '$',
  expenseIcons: {
    food: '/icons/burger.png',
    car: '/icons/car.png',
  },
  incomeIcons: {
    salary: '/icons/salary.png',
    investment: '/icons/investment.png',
  },
};

const expenseData = [
  {
    category: 'Food',
    date: '02.02.2024',
    note: 'Bought food etc etc etc etc',
    amount: 26.58,
  },
  { category: 'Car', date: '02.02.2024', note: 'Petrol', amount: 25.0 },
];

const incomeData = [
  {
    category: 'Salary',
    date: '02.02.2024',
    note: 'Monthly salary received',
    amount: 2000,
  },
  {
    category: 'Investment',
    date: '02.02.2024',
    note: 'Interests from investment in iron market',
    amount: 500,
  },
];
// AWAITING DATA FINISH

export default function ListPage() {
  const [tabSelectionClicked, setTabSelectionClicked] =
    useState<boolean>(false);
  const { themeColorsList }: any = useThemeContext();
  const { expenseList, settings, incomeList }: any = useDataContext();
  console.log(incomeList);
  console.log(settings);

  const handleSelection = () => {
    setTabSelectionClicked(!tabSelectionClicked);
  };

  return (
    <section
      className="rounded-[5px] h-[100%] p-[10px]"
      style={{ backgroundColor: themeColorsList.fourthColor }}
    >
      <div className="flex justify-between">
        <p className="font-bold">
          {tabSelectionClicked ? 'Earnings' : 'Spendings'}{' '}
        </p>
        <button
          onClick={handleSelection}
          className="text-center rounded bg-[#F5F5F5] px-[5px]"
        >
          {tabSelectionClicked ? 'Spendings' : 'Earnings'}
        </button>
      </div>
      <div>
        {!tabSelectionClicked
          ? expenseList.map((x: any) => (
              <div key={x.note}>
                <ListElement
                  iconUrl={
                    (settings.expenseIcons as any)[x.category.toLowerCase()]
                  }
                  currency={settings.currency}
                  category={x.category}
                  date={x.date}
                  note={x.note}
                  amount={x.amount}
                />
              </div>
            ))
          : incomeList.map((x: any) => (
              <div key={x.note}>
                <ListElement
                  iconUrl={settings.incomeIcons[x.source.toLowerCase()]}
                  currency={settings.currency}
                  category={x.source}
                  date={x.date}
                  note={x.note}
                  amount={x.amount}
                />
              </div>
            ))}
      </div>
    </section>
  );
}
