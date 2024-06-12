import { ChangeEvent, ChangeEventHandler, useState, useEffect } from 'react';
import './style.css';
import { useDataContext } from '@/app/store/dataStore';

// {
//   /* AWAITING DATA */
// }
// const settingData = [
//   { category: 'Food', color: '#8F8B66' },
//   { category: 'Car', color: '#F8F32B' },
//   { category: 'Sport', color: '#256D7B' },
//   { category: 'Clothes', color: '#C6A664' },
//   { category: 'Rent', color: '#3D642D' },
//   { category: 'Holiday', color: '#721422' },
// ];

export default function ColorsSetting() {
  const [colorsList, setColorsList] = useState<{ [key: string]: string }>({});

  const { settings }: any = useDataContext();

  useEffect(() => {
    setColorsList(settings.colors);
  }, [settings.colors]);

  const colorChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    item: string,
  ) => {
    setColorsList((prev) => ({ ...prev, [item]: event.target.value }));
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {Object.keys(colorsList).map((x) => (
          <div
            key={x}
            className={'text-center rounded-[5px] flex justify-between'}
          >
            {x}
            <div className="w-[25px] h-[25px]">
              <input
                onChange={(e) => colorChangeHandler(e, x)}
                type="color"
                className="w-[100%] h-[100%] colorInput cursor-pointer"
                value={colorsList[x]}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button className="w-[100%] h-[100%]">Confirm</button>
      </div>
    </div>
  );
}
