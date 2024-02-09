'use client';

import React from 'react';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded bg-[white]';

export default function DatePicker({ dateValue, setDateValue }: any) {
  const refEl = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setDateValue(new Date().toLocaleDateString());
  }, [setDateValue]);

  const changeHandler = (e: any) => {
    setDateValue(new Date(e.target.value).toLocaleDateString());
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
        {dateValue ? dateValue : new Date().toLocaleDateString()}
      </div>
      <div className="absolute top-0 w-[0px] h-[0px] invisible">
        <input ref={refEl} type="date" onChange={changeHandler} />
      </div>
    </div>
  );
}
