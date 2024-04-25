import { useState } from 'react';
import Image from 'next/image';
import IconSelector from './iconSelector';
import { colorPalette } from '@/utils/themeUnits';

{
  /* AWAITING DATA */
}
const settingData = [
  { category: 'Food', icon: '/icons/burger.png' },
  { category: 'Car', icon: '/icons/car.png' },
  { category: 'Sport', icon: '/icons/sport.png' },
  { category: 'Clothes', icon: '/icons/clothing.png' },
  { category: 'Rent', icon: '/icons/house.png' },
  { category: 'Holiday', icon: '/icons/cellphone.png' },
];

export default function IconsSetting() {
  const [iconsList, setIconsList] = useState(settingData);
  const [activeIcon, setActiveIcon] = useState<any>(null);

  const handleIconSelection = (path: string) => {
    if (activeIcon) {
      setIconsList((prev) =>
        prev.map((x) =>
          x.category == activeIcon.category ? { ...x, icon: path } : x,
        ),
      );
      setActiveIcon(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px] md:w-[75%]">
        {iconsList.map((x) => (
          <div
            key={x.category}
            className={
              'text-center rounded-[5px] flex justify-between px-[10px] py-[2.5px] cursor-pointer' +
              ' ' +
              ` bg-[${
                activeIcon?.category == x.category && colorPalette.gingered
              }]`
            }
            onClick={() => setActiveIcon(x)}
          >
            {x.category}
            <div className="w-[25px] h-[25px] relative">
              <Image src={x.icon} fill alt="icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[10px]">
        <IconSelector
          showSelector={Boolean(true)}
          onIconSelection={handleIconSelection}
        />
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button className="w-[100%] h-[100%]">Confirm</button>
      </div>
    </div>
  );
}
