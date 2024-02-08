'use client';

import React from 'react';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded bg-[white]';

const data = ['one', 'two', 'three', 'four'];

export default function SelectPicker() {
  const [selectValue, setSelectValue] = React.useState<string>();
  const [showPicker, setShowPicker] = React.useState<boolean>(false);

  const handleSelection = (e: any) => {
    e.stopPropagation();
    setSelectValue(e.target.innerHTML);
    setShowPicker(false);
  };

  return (
    <div className="">
      <div
        onClick={() => {
          setShowPicker(!showPicker);
        }}
        className={commonClasses + ' cursor-pointer relative'}
      >
        {!selectValue ? data[0] : selectValue}
        <div
          style={{ display: `${!showPicker ? 'none' : 'block'}` }}
          className={'absolute left-0 top-[100%] w-[100%] bg-[white]'}
        >
          <div>
            {data.map((x) => (
              <div
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    '#D8D4F2';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    '#F5F5F5';
                }}
                onClick={handleSelection}
                className={
                  'rounded-none text-center p-[5px] bg-[#F5F5F5] mb-[1px]'
                }
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
