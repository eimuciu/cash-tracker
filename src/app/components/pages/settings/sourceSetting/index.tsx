import { useState, useRef } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

{
  /* AWAITING DATA */
}
const settingData = ['Salary', 'Investment'];

export default function SourceSetting() {
  const [sourceList, setSourceList] = useState(settingData);
  const inputRef = useRef<HTMLInputElement>(null);

  const addNewSource = () => {
    if (inputRef.current && inputRef.current.value) {
      const inputValue = inputRef.current.value;
      setSourceList((prev) => [...prev, inputValue]);
      inputRef.current.value = '';
    }
  };

  const removeSourceFromList = (sourceName: string) => {
    setSourceList((prev) => prev.filter((x) => x !== sourceName));
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {sourceList.map((x) => (
          <div
            key={x}
            className={'text-center rounded-[5px] flex justify-between'}
          >
            {x}
            <FaTrashAlt
              onClick={() => removeSourceFromList(x)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="w-[100%] flex gap-[5px] items-center">
        <input
          ref={inputRef}
          className="w-[100%] rounded-[5px] py-[2.5px] px-[10px] outline-none"
          placeholder="Type..."
        />
        <MdLibraryAdd
          onClick={addNewSource}
          className="h-[30px] w-[30px] color-[red] cursor-pointer"
        />
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button className="w-[100%] h-[100%]">Confirm</button>
      </div>
    </div>
  );
}
