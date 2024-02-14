'use client';

import React from 'react';
import { colorPalette } from '@/utils/themeUnits';
import BarChartElement from './barChart';
import PieChartElement from './pieChart';
import RadarChartElement from './radarChart';
import Image from 'next/image';

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
      <div className="mt-[25px] flex gap-[25px] justify-center">
        <div className="flex flex-col items-center">
          <div className="w-[25px] h-[25px] relative">
            <Image src="/burger.png" fill alt="icon" />
          </div>
          <p>Food</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[25px] h-[25px] relative">
            <Image src="/sport.png" fill alt="icon" />
          </div>
          <p>Sport</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[25px] h-[25px] relative">
            <Image src="/car.png" fill alt="icon" />
          </div>
          <p>Car</p>
        </div>
      </div>
    </div>
  );
}
