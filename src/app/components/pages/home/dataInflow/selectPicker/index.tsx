'use client';

import React from 'react';
import { useThemeContext } from '@/app/store/themeStore';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded bg-[white]';

interface Props {
  selectValue: string;
  setSelectValue: (x: string) => void;
  selectData: string[];
  propStyles?: { [key: string]: string | number };
}

export default function SelectPicker({
  selectValue,
  setSelectValue,
  selectData,
  propStyles,
}: Props) {
  const [showPicker, setShowPicker] = React.useState<boolean>(false);
  const refEl = React.useRef<HTMLDivElement>(null);
  const { themeColorsList }: any = useThemeContext();

  React.useEffect(() => {
    const docClickHandler = (e: any) => {
      if (refEl.current && !refEl.current.contains(e.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('click', docClickHandler);

    return () => {
      document.removeEventListener('click', docClickHandler);
    };
  }, []);

  const handleSelection = (e: any) => {
    e.stopPropagation();
    setSelectValue(e.target.innerHTML);
    setShowPicker(false);
  };

  return (
    <div ref={refEl} className="">
      <div
        onClick={() => {
          setShowPicker(!showPicker);
        }}
        className={commonClasses + ' cursor-pointer relative'}
        style={propStyles}
      >
        {!selectValue ? selectData[0] : selectValue}
        <div
          style={{ display: `${!showPicker ? 'none' : 'block'}` }}
          className={'absolute left-0 top-[100%] w-[100%] bg-[white]'}
        >
          <div>
            {selectData.map((x: string) => (
              <div
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    themeColorsList.thirdColor;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    '#F5F5F5';
                }}
                onClick={handleSelection}
                className={'rounded-none text-center p-[5px] bg-[#F5F5F5]'}
                key={x}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
