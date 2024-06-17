import { useState, useEffect, useRef } from 'react';
import { useDataContext } from '@/app/store/dataStore';
import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';
import BudgetListItem from './budgetListItem';
import Modal from '@/app/components/modal';
import useModal from '@/app/components/modal/useModal';
import { FaTrashAlt } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import SelectPicker from '../dataInflow/selectPicker';

function filterSelectValues(expenseCategories: any, budget: any) {
  return expenseCategories.filter((x: any) => {
    let isMatch = true;
    for (let i = 0; i < budget.length; i++) {
      if (budget[i].category === x) {
        isMatch = false;
        break;
      }
    }
    return isMatch;
  });
}

export default function Budget() {
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();

  const [budgetList, setBudgetList] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>('');
  const [selectValuesList, setSelectValuesList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { budget, settings }: any = useDataContext();

  useEffect(() => {
    setBudgetList(budget);
    setSelectValuesList(() => {
      const x = filterSelectValues(settings.expenseCategories, budget);
      setSelectValue(x[0]);
      return x;
    });
  }, [budget, settings.expenseCategories]);

  const onAddNewBudget = () => {
    // if (inputRef.current && inputRef.current.value) {
    //   const inputValue = inputRef.current.value;
    //   if (!categoriesList.includes(inputValue)) {
    //     setCategoriesList((prev) => [...prev, inputValue]);
    //     inputRef.current.value = '';
    //   }
    // }
  };

  const onRemoveBudgetFromList = (catName: string) => {
    // setCategoriesList((prev) => prev.filter((x) => x !== catName));
  };

  const onBudgetConfirm = () => {
    // addCategoriesSettings(categoriesList);
    // handleCloseModal();
    console.log(selectValue);
  };

  const onSetBudgetClick = () => {
    handleSettingClick('Budget');
  };

  return (
    <>
      <Modal
        header={settingName}
        postHeader="Set your budget for this month"
        showModal={showModal}
        closeModal={handleCloseModal}
      >
        <div className="flex flex-col items-center w-[100%] gap-[10px]">
          <div className="w-[50%] flex flex-col gap-[5px]">
            {budgetList.map((x: any) => (
              <div
                key={x.budget}
                className={
                  'text-center rounded-[5px] flex justify-between mb-[10px] flex justify-between'
                }
              >
                <div className="w-[25px] h-[25px] relative">
                  <Image
                    src={settings.expenseIcons[x.category]}
                    fill
                    alt="category"
                  />
                </div>
                <div>{x.category}</div>
                <div>
                  {settings.currency}
                  {x.budget.toFixed(2)}
                </div>
                <FaTrashAlt
                  onClick={() => onRemoveBudgetFromList(x)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] flex gap-[5px] items-center flex items-center">
            <div className="w-[25%] self-stretch">
              <SelectPicker
                propStyles={{ marginBottom: 0 }}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                selectData={selectValuesList}
              />
            </div>
            <input
              ref={inputRef}
              className="w-[100%] rounded-[5px] py-[2.5px] px-[10px] outline-none self-stretch"
              placeholder="Type..."
            />
            <MdLibraryAdd
              onClick={onAddNewBudget}
              className="h-[30px] w-[30px] color-[red] cursor-pointer"
            />
          </div>
          <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
            <button onClick={onBudgetConfirm} className="w-[100%] h-[100%]">
              Confirm
            </button>
          </div>
        </div>
      </Modal>
      <div className="relative h-[100%]">
        <div className="flex justify-between">
          <p className="font-bold">Budget</p>
          <button
            onClick={onSetBudgetClick}
            className="text-center rounded bg-[#F5F5F5] px-[5px]"
          >
            Set budget
          </button>
        </div>
        {budgetList.map((x: any) => (
          <div key={x.budget}>
            <BudgetListItem
              value={75}
              color={settings.colors[x.category]}
              icon={settings.expenseIcons[x.category]}
              category={x.category}
              currency={settings.currency}
              amount={x.budget}
            />
          </div>
        ))}
      </div>
    </>
  );
}
