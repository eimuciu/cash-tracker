import { useState, useRef, useEffect } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';
import { FaTrashAlt } from 'react-icons/fa';

interface Props {
  closeModal: () => void;
}

export default function CurrencySetting({ closeModal }: Props) {
  const [activeCurrency, setActiveCurrency] = useState<string>('');
  const [currenciesList, setCurrenciesList] = useState<string[] | []>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { themeColorsList }: any = useThemeContext();
  const { settings, addCurrencySettings }: any = useDataContext();

  useEffect(() => {
    setActiveCurrency(settings.currency);
    setCurrenciesList(settings.currenciesList);
  }, [settings.currency, settings.currenciesList]);

  const addNewCurrency = () => {
    if (inputRef.current && inputRef.current.value) {
      const inputValue = inputRef.current.value;
      setCurrenciesList((prev: any) => [...prev, inputValue]);
      inputRef.current.value = '';
    }
  };

  const onCurrencySettingsConfirm = () => {
    addCurrencySettings(activeCurrency, currenciesList);
    closeModal();
  };

  const onRemoveCurrency = (curr: string) => {
    setCurrenciesList((prev) => prev.filter((x) => x !== curr));
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {currenciesList.map((x: any) => (
          <div key={x} className="flex gap-[10px] items-center">
            <div
              className="text-center rounded-[5px] cursor-pointer w-[100%]"
              style={
                x[x.length - 1] == activeCurrency
                  ? { backgroundColor: themeColorsList.secondColor }
                  : {}
              }
              onClick={() => {
                setActiveCurrency(x[x.length - 1]);
              }}
            >
              {x}
            </div>
            <FaTrashAlt
              onClick={() => {
                onRemoveCurrency(x);
              }}
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
          onClick={addNewCurrency}
          className="h-[30px] w-[30px] color-[red] cursor-pointer"
        />
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button
          onClick={onCurrencySettingsConfirm}
          className="w-[100%] h-[100%]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
