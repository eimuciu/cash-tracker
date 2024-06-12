import { useState, useRef, useEffect } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { useDataContext } from '@/app/store/dataStore';

interface Props {
  closeModal: () => void;
}

export default function SourceSetting({ closeModal }: Props) {
  const [sourceList, setSourceList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { settings, addSourceSettings }: any = useDataContext();

  useEffect(() => {
    setSourceList(settings.incomeSource);
  }, [settings.incomeSource]);

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

  const onSourceSettingsConfirm = () => {
    addSourceSettings(sourceList);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {sourceList.map((x: string) => (
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
        <button onClick={onSourceSettingsConfirm} className="w-[100%] h-[100%]">
          Confirm
        </button>
      </div>
    </div>
  );
}
