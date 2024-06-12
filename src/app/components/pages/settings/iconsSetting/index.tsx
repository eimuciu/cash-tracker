import { useEffect, useState } from 'react';
import Image from 'next/image';
import IconSelector from './iconSelector';
import { useThemeContext } from '@/app/store/themeStore';
import { useDataContext } from '@/app/store/dataStore';

interface Props {
  closeModal: () => void;
}

export default function IconsSetting({ closeModal }: Props) {
  const [iconsList, setIconsList] = useState<{ [key: string]: string }>({});
  const [activeIcon, setActiveIcon] = useState<any>(null);

  const { themeColorsList }: any = useThemeContext();
  const { settings, addIconSettings }: any = useDataContext();

  useEffect(() => {
    setIconsList(settings.expenseIcons);
  }, [settings.expenseIcons]);

  const handleIconSelection = (path: string) => {
    if (activeIcon) {
      setIconsList((prev) => ({ ...prev, [activeIcon]: path }));
      setActiveIcon(null);
    }
  };

  const onIconSettingConfirm = () => {
    addIconSettings(iconsList);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px] md:w-[75%]">
        {Object.keys(iconsList).map((x) => (
          <div
            key={x}
            className="text-center rounded-[5px] flex justify-between px-[10px] py-[2.5px] cursor-pointer"
            style={
              activeIcon === x
                ? { backgroundColor: themeColorsList.secondColor }
                : {}
            }
            onClick={() => setActiveIcon(x)}
          >
            {x}
            <div className="w-[25px] h-[25px] relative">
              <Image src={iconsList[x]} fill alt="icon" />
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
        <button onClick={onIconSettingConfirm} className="w-[100%] h-[100%]">
          Confirm
        </button>
      </div>
    </div>
  );
}
