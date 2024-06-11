import { useRef, useState, useEffect } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { useDataContext } from '@/app/store/dataStore';

export default function CategoriesSetting() {
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { settings, addCategoriesSettings }: any = useDataContext();

  useEffect(() => {
    setCategoriesList(settings.expenseCategories);
  }, [settings.expenseCategories]);

  const addNewCategory = () => {
    if (inputRef.current && inputRef.current.value) {
      const inputValue = inputRef.current.value;
      if (!categoriesList.includes(inputValue)) {
        setCategoriesList((prev) => [...prev, inputValue]);
        inputRef.current.value = '';
      }
    }
  };

  const removeCategoryFromList = (catName: string) => {
    setCategoriesList((prev) => prev.filter((x) => x !== catName));
  };

  const onCategoriesSettingsConfirm = () => {
    addCategoriesSettings(categoriesList);
  };

  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {categoriesList.map((x) => (
          <div
            key={x}
            className={'text-center rounded-[5px] flex justify-between'}
          >
            {x}
            <FaTrashAlt
              onClick={() => removeCategoryFromList(x)}
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
          onClick={addNewCategory}
          className="h-[30px] w-[30px] color-[red] cursor-pointer"
        />
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button
          onClick={onCategoriesSettingsConfirm}
          className="w-[100%] h-[100%]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
