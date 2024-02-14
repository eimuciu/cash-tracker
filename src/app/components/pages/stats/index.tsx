'use client';

import React from 'react';
import { colorPalette } from '@/utils/themeUnits';
import BarChartElement from './barChart';
import PieChartElement from './pieChart';
import RadarChartElement from './radarChart';
import Image from 'next/image';

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
  { name: 'Insurace', icon: '/icons/insurace.png' },
  { name: 'Internet', icon: '/icons/internet.png' },
  { name: 'Mortgage', icon: '/icons/mortgage.png' },
  { name: 'Pets', icon: '/icons/pets.png' },
  { name: 'Repairs', icon: '/icons/repairs.png' },
  { name: 'Subscription', icon: '/icons/subscription.png' },
  { name: 'Taxes', icon: '/icons/taxes.png' },
  { name: 'Transportation', icon: '/icons/transportation.png' },
  { name: 'Utility', icon: '/icons/utility.png' },
];

export default function StatsPage() {
  const [chartElement, setChartElement] = React.useState<string>('bar');
  return (
    <div
      className={
        'flex flex-col rounded-[10px] h-[100%] p-[10px]' +
        ' ' +
        `bg-[${colorPalette.greened}]`
      }
    >
      {chartElement === 'bar' && <BarChartElement />}
      {chartElement === 'pie' && <PieChartElement />}
      {chartElement === 'radar' && <RadarChartElement />}
      <div className="mt-[25px] flex gap-[25px] justify-center flex-wrap">
        {icons.map((x) => (
          <div key={x.name} className="flex flex-col items-center">
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
