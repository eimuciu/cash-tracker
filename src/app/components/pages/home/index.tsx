'use client';

import React from 'react';
import LayoutWrapper from '../../layoutWrapper';
import DataInflow from './dataInflow';
import Budget from './budget';

// AWAITING DATA START
const expenseCategory = ['Exone', 'Extwo', 'Exthree', 'Exfour'];
const incomeCategory = ['Inone', 'Intwo', 'Inthree', 'Infour'];
// AWAITING DATA FINISH

export default function HomePage() {
  const [tab, setTab] = React.useState<string>('expense');

  const handlePickTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <LayoutWrapper>
      <section className="flex gap-[10px] h-[100%] md:flex-col">
        <div className="flex flex-col w-[20%] rounded-[10px] h-[100%] md:w-[100%] ">
          <div className="flex">
            <p
              onClick={() => {
                handlePickTab('expense');
              }}
              className={
                'w-[50%] text-center p-[10px] rounded-t-[10px] cursor-pointer' +
                ' ' +
                `${tab === 'expense' ? 'bg-[#C6E0FF]' : 'bg-[white]'}`
              }
            >
              Expense
            </p>
            <p
              onClick={() => {
                handlePickTab('income');
              }}
              className={
                'w-[50%] text-center p-[10px] cursor-pointer' +
                ' ' +
                `${
                  tab === 'income'
                    ? 'bg-[#C6E0FF] rounded-t-[10px]'
                    : 'bg-[white]'
                }`
              }
            >
              Income
            </p>
          </div>
          <div
            className={
              'flex flex-col p-[10px] h-[100%] bg-[#C6E0FF] rounded-b-[10px]' +
              ' ' +
              `${tab === 'expense' ? 'rounded-e-[10px]' : 'rounded-s-[10px]'}`
            }
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
    </LayoutWrapper>
  );
}
