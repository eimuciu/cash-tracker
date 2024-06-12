'use client';

import React, { useRef, useEffect } from 'react';
import BarChartElement from './barChart';
import PieChartElement from './pieChart';
import RadarChartElement from './radarChart';
import VerticalChartElement from './verticalChart';
import Image from 'next/image';
import { useThemeContext } from '@/app/store/themeStore';
import './style.css';
import { data as dataList } from './manifestData';
import Modal from '../../modal';
import useModal from '../../modal/useModal';
import ListElement from '../list/listElement';
import { useDataContext } from '@/app/store/dataStore';
import { sumDataByCategory, createStatsList } from '@/utils/types';

function sortArray(chartData: any) {
  return chartData.sort((a: any, b: any) => b.amount - a.amount);
}

export default function StatsPage() {
  const [chartElement, setChartElement] = React.useState<string>('vertical');
  const { themeColorsList }: any = useThemeContext();
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();
  const [currentExpense, setCurrentExpense] = React.useState<any | null>(null);
  const { expenseList, settings }: any = useDataContext();
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
            <div className="flex gap-[10px]">
              <div className="w-[25px] h-[25px] relative">
                <Image
                  src={settings.expenseIcons[currentExpense.name]}
                  fill
                  alt="icon"
                />
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
        {currentExpense &&
          expenseList
            .filter((x: any) => x.category === currentExpense.name)
            .map((x: any, i: number) => (
              <ListElement
                key={x.note + i}
                iconUrl={settings.expenseIcons[x.category]}
                category={x.category}
                date={x.date}
                amount={x.amount}
                note={x.note}
                currency={settings.currency}
              />
            ))}
      </Modal>
      <div className="w-[100%] parentScroll">
        <div ref={scrollElRef} className="childScroll" id="style-4">
          {chartElement === 'bar' && (
            <BarChartElement
              data={sortArray(
                createStatsList(sumDataByCategory(expenseList), settings),
              )}
            />
          )}
          {chartElement === 'pie' && <PieChartElement />}
          {chartElement === 'radar' && <RadarChartElement />}
          {chartElement === 'vertical' && (
            <VerticalChartElement
              data={sortArray(
                createStatsList(sumDataByCategory(expenseList), settings),
              )}
            />
          )}
        </div>
      </div>
      <div className="mt-[25px] flex gap-[30px] justify-center flex-wrap">
        {sortArray(
          createStatsList(sumDataByCategory(expenseList), settings),
        ).map((x: any) => (
          <div
            key={x.name}
            onClick={() => {
              handleSettingClick(x.name);
              setCurrentExpense(x);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-[25px] h-[25px] relative">
              <Image src={settings.expenseIcons[x.name]} fill alt="icon" />
            </div>
            <p>{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
