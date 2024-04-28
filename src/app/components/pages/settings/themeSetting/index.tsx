import React, { ChangeEvent } from 'react';
import { colorPalette } from '@/utils/themeUnits';
const { greened, gingered, reded, violeted, greyed, blueued } = colorPalette;

export default function ThemeSetting() {
  const [activeColor, setActiveColor] = React.useState<string>(reded);
  const [firstColor, setFirstColor] = React.useState<string>(violeted);
  const [secondColor, setSecondColor] = React.useState<string>(gingered);
  const [thirdColor, setThirdColor] = React.useState<string>(blueued);
  const [fourthColor, setFourthColor] = React.useState<string>(greened);

  const activeRefEl = React.useRef<HTMLInputElement>(null);
  const firstRefEl = React.useRef<HTMLInputElement>(null);
  const secondRefEl = React.useRef<HTMLInputElement>(null);
  const thirdRefEl = React.useRef<HTMLInputElement>(null);
  const fourthRefEl = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'activeInput') {
      setActiveColor(e.target.value);
    }
    if (e.target.name === 'firstInput') {
      setFirstColor(e.target.value);
    }
  };

  return (
    <div className="flex bg-[white] rounded-[10px]">
      <div className="w-[100%] gap-[10px]  px-[25px] py-[25px] md:pl-[25px] flex flex-col">
        <div
          onClick={() => {
            if (activeRefEl.current) {
              activeRefEl.current.showPicker();
            }
          }}
          className={`relative`}
        >
          <span
            className="font-bold flex cursor-pointer"
            style={{ color: activeColor }}
          >
            Active
          </span>
          <div className="absolute top-0 left-0 w-[0px] h-[0px] invisible">
            <input
              name="activeInput"
              ref={activeRefEl}
              type="color"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div
          onClick={() => {
            if (firstRefEl.current) {
              firstRefEl.current.showPicker();
            }
          }}
          className="relative flex w-[100%] h-[50px] flex-col items-center rounded-[10px] p-[10px] md:w-[100%] cursor-pointer"
          style={{ backgroundColor: firstColor }}
        >
          <div className="absolute top-0 left-[0] w-[0px] h-[0px] invisible">
            <input
              name="firstInput"
              ref={firstRefEl}
              type="color"
              onChange={changeHandler}
            />
          </div>
        </div>
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
