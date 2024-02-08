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
    console.log(showPicker);
  };

  // onMouseEnter
  // onMouseLeave

  return (
    <div className="">
      <div
        onClick={() => {
          setShowPicker(true);
          console.log('am a executing');
        }}
        className={commonClasses + ' cursor-pointer relative'}
      >
        {!selectValue ? data[0] : selectValue}
        <div
          style={{ display: `${!showPicker ? 'none' : 'block'}` }}
          className={
            'absolute left-0 top-[120%] w-[100%] bg-[red] p-[10px]'
            //  +
            // `${showPicker ? 'block' : 'hidden'}`
          }
        >
          <div>
            {data.map((x) => (
              <div
                onClick={handleSelection}
                className={
                  commonClasses +
                  ' ' +
                  'rounded-none text-center mb-[0px] bg-[red]'
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
