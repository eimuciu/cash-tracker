import React, { ChangeEvent } from 'react';
import { colorPalette } from '@/utils/themeUnits';
const { greened, gingered, reded, violeted, blueued } = colorPalette;
import { GiConfirmed } from 'react-icons/gi';
import { CiCircleRemove } from 'react-icons/ci';

export default function ThemeSetting() {
  const [activeColor, setActiveColor] = React.useState<string>(reded);
  const [firstColor, setFirstColor] = React.useState<string>(violeted);
  const [secondColor, setSecondColor] = React.useState<string>(gingered);
  const [thirdColor, setThirdColor] = React.useState<string>(blueued);
  const [fourthColor, setFourthColor] = React.useState<string>(greened);
  const [isAnyChanges, setIsAnyChanges] = React.useState<boolean>(false);

  const activeRefEl = React.useRef<HTMLInputElement>(null);
  const firstRefEl = React.useRef<HTMLInputElement>(null);
  const secondRefEl = React.useRef<HTMLInputElement>(null);
  const thirdRefEl = React.useRef<HTMLInputElement>(null);
  const fourthRefEl = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAnyChanges(true);
    if (e.target.name === 'activeInput') {
      setActiveColor(e.target.value);
    }
    if (e.target.name === 'firstInput') {
      setFirstColor(e.target.value);
    }
    if (e.target.name === 'secondInput') {
      setSecondColor(e.target.value);
    }
    if (e.target.name === 'thirdInput') {
      setThirdColor(e.target.value);
    }
    if (e.target.name === 'fourthInput') {
      setFourthColor(e.target.value);
    }
  };

  return (
    <div className="flex bg-[white] rounded-[10px] relative">
      <div
        className="absolute top-1 right-3 flex cursor-pointer"
        style={{ display: isAnyChanges ? 'block' : 'none' }}
      >
        <GiConfirmed />
      </div>
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
        <div
          onClick={() => {
            if (secondRefEl.current) {
              secondRefEl.current.showPicker();
            }
          }}
          className="relative h-[25px] w-[100%] rounded-[10px] bg-[#d1ac00] md:w-[100%] cursor-pointer"
          style={{ backgroundColor: secondColor }}
        >
          <div className="absolute top-0 left-[0] w-[0px] h-[0px] invisible">
            <input
              name="secondInput"
              ref={secondRefEl}
              type="color"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex gap-[10px] flex-col">
          <div className="flex flex-col w-[100%] rounded-[10px] md:w-[100%] ">
            <div
              onClick={() => {
                if (thirdRefEl.current) {
                  thirdRefEl.current.showPicker();
                }
              }}
              className="relative flex h-[75px] flex-col p-[10px] h-[100%] rounded-[10px] cursor-pointer"
              style={{ backgroundColor: thirdColor }}
            >
              <div className="absolute top-0 left-[0] w-[0px] h-[0px] invisible">
                <input
                  name="thirdInput"
                  ref={thirdRefEl}
                  type="color"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              if (fourthRefEl.current) {
                fourthRefEl.current.showPicker();
              }
            }}
            className="relative w-[100%] h-[100px] rounded-[10px] md:w-[100%] cursor-pointer"
            style={{ backgroundColor: fourthColor }}
          >
            <div className="absolute top-0 left-[0] w-[0px] h-[0px] invisible">
              <input
                name="fourthInput"
                ref={fourthRefEl}
                type="color"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
