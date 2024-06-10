'use client';

import React, { useRef, useEffect } from 'react';
import BarChartElement from './barChart';
import PieChartElement from './pieChart';
import RadarChartElement from './radarChart';
import Image from 'next/image';
import { useThemeContext } from '@/app/store/themeStore';
import './style.css';
import { data as dataList } from './manifestData';
import Modal from '../../modal';
import useModal from '../../modal/useModal';

const icons = [
  { name: 'Cellphone', icon: '/icons/cellphone.png' },
  { name: 'Child', icon: '/icons/child.png' },
  { name: 'Cleaning', icon: '/icons/cleaning.png' },
  { name: 'Clothing', icon: '/icons/clothing.png' },
  { name: 'Debt', icon: '/icons/debt.png' },
  { name: 'Food', icon: '/icons/food.png' },
  { name: 'Gas', icon: '/icons/gas.png' },
  { name: 'Gift', icon: '/icons/gift.png' },
  { name: 'Healthcare', icon: '/icons/healthcare.png' },
  { name: 'Home owning', icon: '/icons/homeowning.png' },
  { name: 'House', icon: '/icons/house.png' },
  { name: 'Internet', icon: '/icons/internet.png' },
  { name: 'Mortgage', icon: '/icons/mortgage.png' },
  { name: 'Pets', icon: '/icons/pets.png' },
  { name: 'Repairs', icon: '/icons/repairs.png' },
  { name: 'Subscription', icon: '/icons/subscription.png' },
  { name: 'Taxes', icon: '/icons/taxes.png' },
  { name: 'Transportation', icon: '/icons/transportation.png' },
  { name: 'Utility', icon: '/icons/utility.png' },
];

function sortArray(chartData: any) {
  return chartData.sort((a: any, b: any) => b.amount - a.amount);
}

const data = sortArray(dataList);

export default function StatsPage() {
  const [chartElement, setChartElement] = React.useState<string>('bar');
  const { themeColorsList }: any = useThemeContext();
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();
  const [currentExpense, setCurrentExpense] = React.useState<{
    name: string;
    icon: string;
  } | null>(null);
  // Scroll behaviour start
  const scrollElRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollElRef && scrollElRef.current) {
      console.log(scrollElRef);
      scrollElRef.current.scrollTo(0, scrollElRef.current.scrollHeight);
    }
  }, []);
  // Scroll behaviour end

  return (
    <div
      className="flex flex-col rounded-[5px] h-[100%] p-[10px] border-[1px]"
      style={{ backgroundColor: themeColorsList.fourthColor }}
    >
      <Modal
        header={
          currentExpense ? (
            <div className="flex gap-[5px]">
              <div className="w-[25px] h-[25px] relative">
                <Image src={currentExpense.icon} fill alt="icon" />
              </div>
              {currentExpense.name}
            </div>
          ) : (
            ''
          )
        }
        showModal={showModal}
        closeModal={handleCloseModal}
      >
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Modal>
      <div className="w-[100%] parentScroll">
        <div ref={scrollElRef} className="childScroll">
          {chartElement === 'bar' && <BarChartElement data={data} />}
          {chartElement === 'pie' && <PieChartElement />}
          {chartElement === 'radar' && <RadarChartElement />}
        </div>
      </div>
      <div className="mt-[25px] flex gap-[25px] justify-center flex-wrap">
        {icons.map((x) => (
          <div
            key={x.name}
            onClick={() => {
              handleSettingClick(x.name);
              setCurrentExpense(x);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-[25px] h-[25px] relative">
              <Image src={x.icon} fill alt="icon" />
            </div>
            <p>{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
