import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import './style.css';
{
  /* AWAITING DATA */
}
const settingData = [
  { category: 'Food', color: '#8F8B66' },
  { category: 'Car', color: '#F8F32B' },
  { category: 'Sport', color: '#256D7B' },
  { category: 'Clothes', color: '#C6A664' },
  { category: 'Rent', color: '#3D642D' },
  { category: 'Holiday', color: '#721422' },
];

export default function ColorsSetting() {
  const [colorsList, setColorsList] = useState<
    {
      category: string;
      color: string;
    }[]
  >(settingData);

  const colorChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    item: { category: string; color: string },
  ) => {
    setColorsList((prev) =>
      prev.map((x) =>
        x.category === item.category ? { ...x, color: event.target.value } : x,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {colorsList.map((x) => (
          <div
            key={x.category}
            className={'text-center rounded-[5px] flex justify-between'}
          >
            {x.category}
            <div className="w-[25px] h-[25px]">
              <input
                onChange={(e) => colorChangeHandler(e, x)}
                type="color"
                className="w-[100%] h-[100%] colorInput cursor-pointer"
                value={x.color}
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
