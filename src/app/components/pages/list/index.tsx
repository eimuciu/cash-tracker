'use client';

import React, { useEffect, useState } from 'react';
import ListElement from './listElement';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';
import Modal from '@/app/components/modal';
import useModal from '../../modal/useModal';
import DataInflow from './dataInflow';

export const generateKey = () => {
  return Math.floor(Math.random() * 1001 + 1) + new Date().getTime();
};

export default function ListPage() {
  const [tabSelectionClicked, setTabSelectionClicked] =
    useState<boolean>(false);
  const [dblClickedItem, setDblClickedItem] = useState({
    type: '',
    item: {},
  });

  const { themeColorsList }: any = useThemeContext();
  const { expenseList, settings, incomeList, filter }: any = useDataContext();
  const { showModal, handleSettingClick, handleCloseModal } = useModal();

  const handleSelection = () => {
    setTabSelectionClicked(!tabSelectionClicked);
  };

  const handleListItemDblClick = (item: any, type: string) => {
    handleSettingClick('');
    setDblClickedItem({ type, item });
  };

  return (
    <>
      <Modal showModal={showModal} closeModal={handleCloseModal} header="">
        <DataInflow
          selectCategory={
            dblClickedItem.type === 'expense'
              ? settings.expenseCategories
              : settings.incomeSource
          }
          onDataConfirm={(data) => {
            console.log('HERE IS THE DATA I AM GETTING: ', data);
          }}
          itemObj={dblClickedItem.item}
        />
      </Modal>
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
              <div
                key={generateKey()}
                onDoubleClick={() => {
                  handleListItemDblClick(x, 'expense');
                }}
              >
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
              <div
                key={generateKey()}
                onDoubleClick={() => {
                  handleListItemDblClick(x, 'income');
                }}
              >
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
    </>
  );
}
