import { useState } from 'react';
import { colorPalette } from '@/utils/themeUnits';
import { MdLibraryAdd } from 'react-icons/md';

{
  /* AWAITING DATA */
}
const settingData = [
  { currency: 'Euro €' },
  { currency: 'Dollars $' },
  { currency: 'Pounds £' },
];

export default function CurrencySetting() {
  const [activeCurrency, setActiveCurrency] = useState<string>(
    settingData[0].currency,
  );
  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {settingData.map((x) => (
          <div
            key={x.currency}
            className={
              'text-center rounded-[5px] cursor-pointer' +
              ' ' +
              `bg-[${x.currency == activeCurrency && colorPalette.gingered}]`
            }
            onClick={() => {
              setActiveCurrency(x.currency);
            }}
          >
            {x.currency}
          </div>
        ))}
      </div>
      <div className="w-[100%] flex gap-[5px] items-center">
        <input
          className="w-[100%] rounded-[5px] py-[2.5px] px-[10px] outline-none"
          placeholder="Type..."
        />
        <MdLibraryAdd className="h-[30px] w-[30px] color-[red] cursor-pointer" />
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
      <button className='w-[100%] h-[100%]'>Confirm</button>
      </div>
    </div>
  );
}
