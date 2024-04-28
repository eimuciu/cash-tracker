'use client';

import React from 'react';
import DataInflow from './dataInflow';
import Budget from './budget';
import { useThemeContext } from '@/app/store/themeStore';

// AWAITING DATA START
const expenseCategory = ['Exone', 'Extwo', 'Exthree', 'Exfour'];
const incomeCategory = ['Inone', 'Intwo', 'Inthree', 'Infour'];
// AWAITING DATA FINISH

export default function HomePage() {
  const [tab, setTab] = React.useState<string>('expense');
  const { themeColorsList }: any = useThemeContext();

  const handlePickTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <section className="flex gap-[10px] h-[100%] md:flex-col">
      <div className="flex flex-col w-[20%] rounded-[10px] h-[100%] md:w-[100%] ">
        <div className="flex">
          <p
            onClick={() => {
              handlePickTab('expense');
            }}
            className="w-[30%] text-center p-[10px] rounded-t-[10px] cursor-pointer"
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
            className="w-[30%] text-center p-[10px] cursor-pointer rounded-t-[10px]"
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
            'flex flex-col p-[10px] h-[100%] rounded-b-[10px]' +
            ' ' +
            `${tab === 'expense' ? 'rounded-e-[10px]' : 'rounded-t-[10px]'}`
          }
          style={{ backgroundColor: themeColorsList.thirdColor }}
        >
          <p className="pt-[10px] pb-[10px] font-bold">
            {tab === 'expense' ? 'Expense' : 'Income'}
          </p>
          <DataInflow
            selectCategory={
              tab === 'expense' ? expenseCategory : incomeCategory
            }
          />
        </div>
      </div>
      <div className="w-[80%] bg-[#91F5AD] rounded-[10px] p-[10px] md:w-[100%]">
        <Budget />
      </div>
    </section>
  );
}
