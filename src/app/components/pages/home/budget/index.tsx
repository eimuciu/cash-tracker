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
import './style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { generateKey } from '../../list';
import { sumData } from '@/utils/sumData';
import filterByCatName from '@/utils/filterByCatName';

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

const validationChema = Yup.object().shape({
  amount: Yup.number().positive('error').required('error'),
});

export default function Budget() {
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();

  const [budgetList, setBudgetList] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>('');
  const [selectValuesList, setSelectValuesList] = useState<string[]>([]);

  const { budget, settings, addBudgetItem, expenseList }: any =
    useDataContext();

  useEffect(() => {
    setBudgetList(budget);
    setSelectValuesList(() => {
      const x = filterSelectValues(settings.expenseCategories, budget);
      setSelectValue(x[0] || '_');
      return x;
    });
  }, [budget, settings.expenseCategories]);

  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: validationChema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values, bag) => {
      if (selectValue === '_') return;
      setBudgetList((prev: any) => [
        ...prev,
        { budget: values.amount, category: selectValue },
      ]);
      const filteredSelectValues = selectValuesList.filter(
        (x: any) => x !== selectValue,
      );
      setSelectValuesList(filteredSelectValues);
      setSelectValue(filteredSelectValues[0] || '_');
      bag.resetForm();
    },
  });

  const onAddNewBudgetToTheList = () => {
    formik.handleSubmit();
  };

  const onRemoveBudgetFromList = (catName: string) => {
    setBudgetList((prev: any) =>
      prev.filter((x: any) => x.category !== catName),
    );
    const newSelectValuesList = [...selectValuesList, catName];
    setSelectValuesList(newSelectValuesList);
    if (selectValue === '_') setSelectValue(newSelectValuesList[0]);
  };

  const onBudgetConfirm = () => {
    addBudgetItem(budgetList);
    handleCloseModal();
  };

  const onSetBudgetClick = () => {
    handleSettingClick('Budget');
  };

  const onModalClose = () => {
    formik.resetForm();
    handleCloseModal();
  };

  return (
    <>
      <Modal
        header={settingName}
        postHeader="Set your budget for this month"
        showModal={showModal}
        closeModal={onModalClose}
      >
        <div className="flex flex-col items-center w-[100%] gap-[10px]">
          <div className="w-[50%] flex flex-col gap-[5px] md:w-[75%]">
            {budgetList.map((x: any) => (
              <div
                key={generateKey()}
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
                  onClick={() => onRemoveBudgetFromList(x.category)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] flex gap-[5px] items-center flex items-center">
            <div className="w-[30%] self-stretch">
              <SelectPicker
                propStyles={{ marginBottom: 0 }}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                selectData={selectValuesList}
              />
            </div>
            <div className="w-[70%] self-stretch relative">
              <input
                id="amountInput"
                type="number"
                name="amount"
                className="w-[100%] rounded-[5px] py-[2.5px] px-[10px] outline-none h-[100%]"
                placeholder="0.00"
                onChange={formik.handleChange}
                value={formik.values.amount}
              />
              <div className="text-[#880D1E] text-[10px] px-[5px] absolute end-[0px]">
                {formik.errors.amount && formik.errors.amount}
              </div>
            </div>
            <MdLibraryAdd
              onClick={onAddNewBudgetToTheList}
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
        {budget.map((x: any) => (
          <div key={generateKey()}>
            <BudgetListItem
              value={
                (sumData(filterByCatName(expenseList, x.category)) / x.budget) *
                100
              }
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
