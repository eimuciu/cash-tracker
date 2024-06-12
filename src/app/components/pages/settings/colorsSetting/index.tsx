import { ChangeEvent, ChangeEventHandler, useState, useEffect } from 'react';
import './style.css';
import { useDataContext } from '@/app/store/dataStore';

interface Props {
  closeModal: () => void;
}

export default function ColorsSetting({ closeModal }: Props) {
  const [colorsList, setColorsList] = useState<{ [key: string]: string }>({});

  const { settings, addColorSettings }: any = useDataContext();

  useEffect(() => {
    setColorsList(settings.colors);
  }, [settings.colors]);

  const colorChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    item: string,
  ) => {
    setColorsList((prev) => ({ ...prev, [item]: event.target.value }));
  };

  const onColorSettingsConfirm = () => {
    addColorSettings(colorsList);
    closeModal();
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
        <button onClick={onColorSettingsConfirm} className="w-[100%] h-[100%]">
          Confirm
        </button>
      </div>
    </div>
  );
}
