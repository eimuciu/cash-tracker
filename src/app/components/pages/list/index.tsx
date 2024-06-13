'use client';

import React, { useEffect, useState } from 'react';
import ListElement from './listElement';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';
import { filterData } from '@/utils/filterData';

const generateKey = () => {
  return Math.floor(Math.random() * 1001 + 1) + new Date().getTime();
};

function returnData(data: any) {
  return data;
}

export default function ListPage() {
  const [tabSelectionClicked, setTabSelectionClicked] =
    useState<boolean>(false);
  const { themeColorsList }: any = useThemeContext();
  const { expenseList, settings, incomeList, filter }: any = useDataContext();

  const handleSelection = () => {
    setTabSelectionClicked(!tabSelectionClicked);
  };

  // const [exlist, setExList] = useState([]);

  // useEffect(() => {
  //   setExList(filterData(expenseList, filter.case, filter.options));
  //   // setExList(returnData(expenseList));
  // }, [expenseList, filter]);

  return (
    <section
      className="rounded-[5px] h-[100%] p-[10px] border-[1px]"
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
        {!tabSelectionClicked &&
          expenseList.map((x: any) => (
            <div key={generateKey()}>
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
          ))}
        {tabSelectionClicked &&
          incomeList.map((x: any) => (
            <div key={x.note}>
              <ListElement
                iconUrl={settings.incomeIcons[x.category.toLowerCase()]}
                currency={settings.currency}
                category={x.category}
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
