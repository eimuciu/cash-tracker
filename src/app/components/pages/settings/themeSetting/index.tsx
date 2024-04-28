import React, { ChangeEvent } from 'react';
import { colorPalette } from '@/utils/themeUnits';
const { greened, gingered, reded, violeted, greyed, blueued } = colorPalette;

export default function ThemeSetting() {
  const [activeColor, setActiveColor] = React.useState<string>(reded);

  const refEl = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveColor(e.target.value);
  };

  return (
    <div className="flex bg-[white] rounded-[10px]">
      <div className="w-[100%] gap-[10px]  px-[25px] py-[25px] md:pl-[25px] flex flex-col">
        <div
          onClick={() => {
            if (refEl.current) {
              refEl.current.showPicker();
            }
          }}
          className={`font-bold flex cursor-pointer relative`}
          style={{color: activeColor}}
        >
          Active
          <div className="absolute top-0 w-[0px] h-[0px] invisible">
            <input
              ref={refEl}
              type="color"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex w-[100%] h-[50px] flex-col items-center bg-[#D8D4F2] rounded-[10px] p-[10px] md:w-[100%] cursor-pointer"></div>
        <div className="h-[25px] w-[100%] rounded-[10px] bg-[#d1ac00] md:w-[100%] cursor-pointer"></div>
        <div className="flex gap-[10px] flex-col">
          <div className="flex flex-col w-[100%] rounded-[10px] md:w-[100%] ">
            <div className="flex h-[75px] flex-col p-[10px] h-[100%] bg-[#C6E0FF] rounded-[10px] cursor-pointer"></div>
          </div>
          <div className="w-[100%] h-[100px] bg-[#91F5AD] rounded-[10px] md:w-[100%] cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}
