'use client';

import React from 'react';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded bg-[white]';

export default function DatePicker({ dateValue, setDateValue }: any) {
  const refEl = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: any) => {
    setDateValue(new Date(e.target.value).toUTCString());
  };

  return (
    <div className="relative">
      <div
        onClick={() => {
          if (refEl.current) {
            refEl.current.showPicker();
          }
        }}
        className={commonClasses + ' cursor-pointer'}
      >
        {dateValue
          ? new Date(dateValue).toLocaleDateString()
          : new Date().toLocaleDateString()}
      </div>
      <div className="absolute top-0 w-[0px] h-[0px] invisible">
        <input ref={refEl} type="date" onChange={changeHandler} />
      </div>
    </div>
  );
}
