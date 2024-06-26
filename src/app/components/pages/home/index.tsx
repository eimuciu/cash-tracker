'use client';

import React from 'react';
import DataInflow from './dataInflow';
import Budget from './budget';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';

export default function HomePage() {
  const [tab, setTab] = React.useState<string>('expense');
  const { themeColorsList }: any = useThemeContext();
  const { settings, addExpenseItem, addIncomeItem }: any = useDataContext();

  const handlePickTab = (tabName: string) => {
    setTab(tabName);
  };

  const onExpenseConfirm = (expObj: any) => {
    addExpenseItem(expObj);
  };

  const onIncomeConfirm = (incObj: any) => {
    addIncomeItem(incObj);
  };

  return (
    <section className="flex gap-[10px] h-[100%] md:flex-col">
      <div className="flex flex-col w-[20%] rounded-[5px] h-[100%] md:w-[100%] ">
        <div className="flex">
          <p
            onClick={() => {
              handlePickTab('expense');
            }}
            className="w-[30%] text-center p-[10px] rounded-t-[5px] cursor-pointer"
            style={
              tab === 'expense'
                ? { backgroundColor: themeColorsList.thirdColor }
                : {}
            }
          >
            Expense
          </p>
          <p
            onClick={() => {
              handlePickTab('income');
            }}
            className="w-[30%] text-center p-[10px] cursor-pointer rounded-t-[5px]"
            style={
              tab === 'income'
                ? { backgroundColor: themeColorsList.thirdColor }
                : {}
            }
          >
            Income
          </p>
        </div>
        <div
          className={
            'flex flex-col p-[10px] h-[100%] rounded-b-[5px]' +
            ' ' +
            `${tab === 'expense' ? 'rounded-e-[5px]' : 'rounded-t-[5px]'}`
          }
          style={{ backgroundColor: themeColorsList.thirdColor }}
        >
          <p className="pt-[10px] pb-[10px] font-bold">
            {tab === 'expense' ? 'Expense' : 'Income'}
          </p>
          <DataInflow
            selectCategory={
              tab === 'expense'
                ? settings.expenseCategories
                : settings.incomeSource
            }
            onDataConfirm={
              tab === 'expense'
                ? onExpenseConfirm
                : tab === 'income'
                ? onIncomeConfirm
                : () => {}
            }
          />
        </div>
      </div>
      <div
        className="w-[80%] rounded-[5px] p-[10px] md:w-[100%] border-[1px]"
        style={{ backgroundColor: themeColorsList.fourthColor }}
      >
        <Budget />
      </div>
    </section>
  );
}
